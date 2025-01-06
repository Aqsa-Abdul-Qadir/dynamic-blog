'use client';

import React from 'react';
import Link from 'next/link';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-cream-white text-charcoal-gray py-12 px-6">
      <div className="container mx-auto text-center max-w-4xl">
        <h1 className="text-4xl font-bold text-burnt-orange mb-6">About Smart Algorithms</h1>
        
        <p className="text-lg text-gray-700 mb-6">
          Welcome to <span className="font-semibold text-burnt-orange">Smart Algorithms</span>, where we explore
          the fascinating world of Artificial Intelligence, machine learning, and cutting-edge technologies.
          Our goal is to provide insightful articles, guides, and discussions on how algorithms are shaping
          the future and transforming industries.
        </p>
        
        <h2 className="text-3xl font-semibold text-charcoal-gray mb-4">Our Mission</h2>
        <p className="text-lg text-gray-700 mb-6">
          At Smart Algorithms, our mission is to simplify complex AI and algorithm topics, making them
          accessible and understandable for everyone. Whether youre a beginner or an expert, we aim to
          share valuable knowledge to help you stay ahead in the fast-evolving tech landscape.
        </p>

        <h2 className="text-3xl font-semibold text-charcoal-gray mb-4">What We Cover</h2>
        <ul className="list-disc list-inside text-lg text-gray-700 mb-6">
          <li>Artificial Intelligence (AI) and Machine Learning (ML) Basics</li>
          <li>Deep Dive into Neural Networks and Algorithms</li>
          <li>Emerging Trends in AI and their Real-World Applications</li>
          <li>Code Tutorials and Best Practices for AI Projects</li>
          <li>Interviews with Industry Experts and Thought Leaders</li>
        </ul>

        <h2 className="text-3xl font-semibold text-charcoal-gray mb-4">Get Involved</h2>
        <p className="text-lg text-gray-700 mb-6">
          Join our community of AI enthusiasts and tech experts! Share your thoughts, comments, and
          questions with us. We love engaging with our readers and exchanging ideas to continue learning
          and growing together.
        </p>

        <div className="mt-8">
          <Link
            href="/contact"
            className="bg-amber-yellow text-charcoal-gray py-2 px-6 rounded-lg text-lg hover:bg-emerald-green hover:text-white transition duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;