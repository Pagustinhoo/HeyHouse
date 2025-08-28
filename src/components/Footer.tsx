@@ .. @@
 import React from 'react';
-import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
+import { Mail, Phone, MapPin, Instagram, MessageCircle } from 'lucide-react';
 import Logo from './Logo';

@@ .. @@
             <div className="flex space-x-4">
-              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
-                <Facebook size={20} />
+              <a 
+                href="https://wa.me/5545920029986" 
+                target="_blank" 
+                rel="noopener noreferrer"
+                className="text-gray-400 hover:text-green-400 transition-colors"
+              >
+                <MessageCircle size={20} />
               </a>
               <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                 <Instagram size={20} />
               </a>
-              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
-                <Linkedin size={20} />
-              </a>
             </div>
           </div>

@@ .. @@
               <div className="flex items-center space-x-3">
                 <Mail size={18} className="text-blue-400" />
                 <a 
-                  href="mailto:heliasandrei16@gmail.com" 
+                  href="mailto:heyhouseimoveis@gmail.com" 
                   className="text-gray-400 hover:text-white transition-colors"
                 >
-                  heliasandrei16@gmail.com
+                  heyhouseimoveis@gmail.com
                 </a>
               </div>
               <div className="flex items-center space-x-3">
                 <Phone size={18} className="text-green-400" />
-                <span className="text-gray-400">(11) 99999-9999</span>
+                <a 
+                  href="tel:+5545920029986"
+                  className="text-gray-400 hover:text-white transition-colors"
+                >
+                  (45) 92002-9986
+                </a>
               </div>
               <div className="flex items-center space-x-3">
                 <MapPin size={18} className="text-red-400" />

@@ .. @@
         <div className="border-t border-gray-800 mt-8 pt-8 text-center">
           <p className="text-gray-400">
-            © 2024 HeyHouse. Todos os direitos reservados. | Desenvolvido por Helias Andrei
+            © 2025 HeyHouse. Todos os direitos reservados.
           </p>
         </div>
       </div>