import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSendMessage } from "@/hooks/use-portfolio";
import { insertMessageSchema, type InsertMessage } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Send } from "lucide-react";
import { motion } from "framer-motion";

export function ContactForm() {
  const { toast } = useToast();
  const sendMessage = useSendMessage();
  
  const form = useForm<InsertMessage>({
    resolver: zodResolver(insertMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

  const onSubmit = (data: InsertMessage) => {
    sendMessage.mutate(data, {
      onSuccess: () => {
        toast({
          title: "Message Sent",
          description: "Thanks for reaching out! I'll get back to you soon.",
          variant: "default",
          className: "bg-primary text-primary-foreground border-none"
        });
        form.reset();
      },
      onError: (error) => {
        toast({
          title: "Error",
          description: error.message || "Something went wrong. Please try again.",
          variant: "destructive"
        });
      }
    });
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="w-full max-w-lg mx-auto lg:mx-0 bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-white/5 shadow-xl"
    >
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-slate-300">Name</label>
          <Input 
            {...form.register("name")}
            placeholder="Your Name" 
            className="bg-secondary/50 border-white/10 text-white placeholder:text-slate-500 focus:border-primary/50 focus:ring-primary/20 h-12"
          />
          {form.formState.errors.name && (
            <p className="text-red-400 text-xs">{form.formState.errors.name.message}</p>
          )}
        </div>
        
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-slate-300">Email</label>
          <Input 
            {...form.register("email")}
            type="email" 
            placeholder="your.email@example.com" 
            className="bg-secondary/50 border-white/10 text-white placeholder:text-slate-500 focus:border-primary/50 focus:ring-primary/20 h-12"
          />
          {form.formState.errors.email && (
            <p className="text-red-400 text-xs">{form.formState.errors.email.message}</p>
          )}
        </div>
        
        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium text-slate-300">Message</label>
          <Textarea 
            {...form.register("message")}
            placeholder="How can I help you?" 
            className="bg-secondary/50 border-white/10 text-white placeholder:text-slate-500 focus:border-primary/50 focus:ring-primary/20 min-h-[150px] resize-none"
          />
          {form.formState.errors.message && (
            <p className="text-red-400 text-xs">{form.formState.errors.message.message}</p>
          )}
        </div>
        
        <Button 
          type="submit" 
          disabled={sendMessage.isPending}
          className="w-full h-12 text-base font-semibold bg-primary hover:bg-primary/90 text-black shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300"
        >
          {sendMessage.isPending ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Send Message
              <Send className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
      </form>
    </motion.div>
  );
}
