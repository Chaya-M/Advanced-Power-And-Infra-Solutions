import React from "react";
import { ShieldCheck } from "lucide-react";

export default function Privacy() {
    return (
        <div className="pt-32 pb-24 max-w-4xl mx-auto px-4">
            <h1 className="text-4xl font-black text-industrial-blue mb-8 flex items-center gap-3">
                <ShieldCheck className="text-energy-yellow" />
                Privacy Policy
            </h1>
            <div className="prose prose-slate max-w-none space-y-6 text-slate-600">
                <p>Your privacy is important to us. This Privacy Policy explains how Advanced Power And Infra Solutions collects, uses, and protects your personal information when you visit our website.</p>

                <h3 className="text-xl font-bold text-industrial-blue mt-8">1. Information Collection</h3>
                <p>We collect information you provide directly to us through enquiry forms, including your name, phone number, and email address, to respond to your service requests.</p>

                <h3 className="text-xl font-bold text-industrial-blue mt-8">2. Use of Information</h3>
                <p>We use the collected information only to provide our services, process enquiries, and improve your experience on our website. We do not sell or share your personal data with third parties for marketing purposes.</p>

                <h3 className="text-xl font-bold text-industrial-blue mt-8">3. Data Protection</h3>
                <p>We implement appropriate technical and organizational measures to protect your personal data against unauthorized access or disclosure.</p>

                <h3 className="text-xl font-bold text-industrial-blue mt-8">4. Contact Us</h3>
                <p>If you have any questions about this Privacy Policy, please contact us at advancedpowerinfra@gmail.com.</p>
            </div>
        </div>
    );
}
