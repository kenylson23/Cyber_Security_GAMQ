import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSchema } from "@shared/schema";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactFormSchema = insertContactSchema.extend({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  service: z.string().min(1, "Selecione um serviço"),
  message: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres")
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactSection() {
  const { ref, inView } = useScrollAnimation();
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      service: "",
      message: ""
    }
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contato em breve.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Erro ao enviar mensagem",
        description: error.message,
        variant: "destructive",
      });
    }
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  return (
    <section id="contact" ref={ref} className="py-20 bg-black-medium">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="container mx-auto px-6"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6 text-gold">
            ENTRE EM CONTATO
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Pronto para transformar sua segurança e tecnologia? Fale conosco!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-gold text-black p-3 rounded-lg">
                <MapPin className="text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-orbitron font-bold mb-2 text-gold">Endereço</h3>
                <p className="text-gray-300">
                  Viana-Estalagem sentido Cacuaco junto a margem<br />
                  Luanda, Angola
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-gold text-black p-3 rounded-lg">
                <Phone className="text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-orbitron font-bold mb-2 text-gold">Telefone</h3>
                <p className="text-gray-300">
                  (11) 9999-9999<br />
                  (11) 8888-8888
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-gold text-black p-3 rounded-lg">
                <Mail className="text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-orbitron font-bold mb-2 text-gold">Email</h3>
                <p className="text-gray-300">
                  contato@gamq.com<br />
                  vendas@gamq.com
                </p>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="glassmorphism rounded-xl p-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gold font-rajdhani font-bold">Nome</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className="bg-black-deep border-gold text-white focus:ring-gold"
                          placeholder="Seu nome completo"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gold font-rajdhani font-bold">Email</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="email"
                          className="bg-black-deep border-gold text-white focus:ring-gold"
                          placeholder="seu@email.com"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gold font-rajdhani font-bold">Serviço</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-black-deep border-gold text-white focus:ring-gold">
                            <SelectValue placeholder="Selecione um serviço" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="seguranca-eletronica">Segurança Eletrônica</SelectItem>
                          <SelectItem value="informatica">Informática</SelectItem>
                          <SelectItem value="cyber-seguranca">Cyber Segurança</SelectItem>
                          <SelectItem value="projetos">Projetos</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gold font-rajdhani font-bold">Mensagem</FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          rows={4}
                          className="bg-black-deep border-gold text-white focus:ring-gold resize-none"
                          placeholder="Descreva sua necessidade..."
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button
                  type="submit"
                  disabled={contactMutation.isPending}
                  className="w-full bg-gold text-black py-3 font-rajdhani font-bold text-lg hover-3d animate-glow"
                >
                  {contactMutation.isPending ? "ENVIANDO..." : "ENVIAR MENSAGEM"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
