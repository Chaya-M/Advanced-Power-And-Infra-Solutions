import React from "react";
import { FileText } from "lucide-react";

export default function Terms() {
    return (
        <div className="pt-32 pb-24 max-w-4xl mx-auto px-4">
            <h1 className="text-4xl font-black text-industrial-blue mb-8 flex items-center gap-3">
                <FileText className="text-energy-yellow" />
                Terms of Service
            </h1>
            <div className="prose prose-slate max-w-none space-y-6 text-slate-600">
                <p>By accessing and using this website, you agree to comply with and be bound by the following terms and conditions.</p>

                <h3 className="text-xl font-bold text-industrial-blue mt-8">1. Service Enquiries</h3>
                <p>Enquiries made through this website do not constitute a binding contract. Prices and availability of generators for sale or rental are subject to final confirmation by our sales team.</p>

                <h3 className="text-xl font-bold text-industrial-blue mt-8">2. Website Content</h3>
                <p>The content on this website, including images and text, is the property of Advanced Power And Infra Solutions and may not be reproduced without permission.</p>

                <h3 className="text-xl font-bold text-industrial-blue mt-8">3. Limitation of Liability</h3>
                <p>AIP Solutions is not liable for any direct or indirect damages arising from the use of this website or the inability to access its services.</p>

                <h3 className="text-xl font-bold text-industrial-blue mt-8">4. Governing Law</h3>
                <p>These terms are governed by the laws of India and any disputes will be subject to the jurisdiction of the courts in Bangalore.</p>
            </div>
        </div>
    );
}
