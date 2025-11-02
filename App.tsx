
import React from 'react';
import { AiAssistant } from './components/AiAssistant';
import { IconCard } from './components/IconCard';

const DnaIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M12 6V5m0 14v-1M9.646 9.646l-1.414-1.414M14.354 14.354l-1.414-1.414M16.06 7.94l1.414-1.414M6.525 17.475l1.414-1.414M4.938 12c.038-.962.3-1.89.8-2.75M19.062 12c-.038.962-.3 1.89-.8 2.75" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const KitIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 12l8-4 8 4" />
    </svg>
);

const SampleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h8a2 2 0 002-2v-4a2 2 0 00-2-2h-8a2 2 0 00-2 2v4a2 2 0 002 2z" />
    </svg>
);

const ResultsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
);

const App: React.FC = () => {
    return (
        <div className="bg-slate-50 min-h-screen text-slate-800">
            {/* Header */}
            <header className="bg-white/80 backdrop-blur-md sticky top-0 z-10 border-b border-slate-200">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center space-x-2">
                            <DnaIcon />
                            <h1 className="text-xl font-bold text-slate-900">Genetics Simplified</h1>
                        </div>
                    </div>
                </div>
            </header>

            <main>
                {/* Hero Section */}
                <section className="py-20 sm:py-28 text-center bg-white">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight">
                            Understand Your DNA, <span className="text-blue-600">Simply.</span>
                        </h1>
                        <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-600">
                            Genetic testing can feel complex. We're here to make it clear and simple. Explore the basics and get answers to your questions from our friendly AI assistant.
                        </p>
                    </div>
                </section>

                {/* What is Genetic Testing Section */}
                <section className="py-16 sm:py-24">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">What is Genetic Testing?</h2>
                            <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
                                It's a type of medical test that identifies changes in your DNA. This can help you understand your risk for certain diseases, learn about your ancestry, and much more.
                            </p>
                        </div>
                    </div>
                </section>

                {/* How It Works Section */}
                <section className="py-16 sm:py-24 bg-white">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">A Simple Process</h2>
                            <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
                                Getting started is easier than you think. Here are the typical steps.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <IconCard
                                icon={<KitIcon />}
                                title="1. Order Your Kit"
                                description="Choose a test and have a simple sample collection kit mailed to your home."
                            />
                            <IconCard
                                icon={<SampleIcon />}
                                title="2. Provide a Sample"
                                description="Follow the easy instructions to collect a saliva sample from the comfort of your home."
                            />
                            <IconCard
                                icon={<ResultsIcon />}
                                title="3. Get Your Results"
                                description="Mail your sample back to the lab. Within a few weeks, your secure digital results will be ready."
                            />
                        </div>
                    </div>
                </section>

                {/* AI Assistant Section */}
                <section id="ai-assistant" className="py-16 sm:py-24">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Have Questions? Ask Away!</h2>
                            <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
                                Our AI assistant is trained to explain genetic concepts in simple terms. Try asking "What is a gene?" or "What can a DNA test tell me?".
                            </p>
                        </div>
                        <AiAssistant />
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-slate-900 text-slate-400">
                <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center">
                    <p>&copy; {new Date().getFullYear()} Genetics Simplified. All rights reserved.</p>
                    <p className="text-sm mt-2">This is for informational purposes only and not a substitute for professional medical advice.</p>
                </div>
            </footer>
        </div>
    );
};

export default App;