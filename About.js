import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Smile, Award, ThumbsUp, User, MapPin, Mail } from 'lucide-react';

const About = () => {
  const [selectedTab, setSelectedTab] = useState('mission');
  const [expandedMember, setExpandedMember] = useState(null);

  const tabContent = {
    mission: {
      title: 'Our Mission',
      content: 'At Suwanee Health Hub, our mission is to empower individuals to take control of their health and well-being through education, support, and community engagement.',
      icon: Smile
    },
    values: {
      title: 'Our Values',
      content: 'We believe in integrity, compassion, and innovation. Our team is committed to providing the highest quality of care and guidance to our community.',
      icon: Award
    },
    impact: {
      title: 'Our Impact',
      content: 'Since our founding, we\'ve helped thousands of individuals achieve their health goals, fostering a healthier and happier Suwanee community.',
      icon: ThumbsUp
    }
  };

  const teamMembers = [
    { name: 'Dr. Sarah Johnson', role: 'Nutritionist', bio: 'Dr. Johnson has over 15 years of experience in nutrition and dietary planning.' },
    { name: 'Mike Thompson', role: 'Fitness Instructor', bio: 'Mike is a certified personal trainer with a passion for helping clients achieve their fitness goals.' },
    { name: 'Emily Chen', role: 'Mental Health Counselor', bio: 'Emily specializes in stress management and mindfulness techniques.' },
    { name: 'David Rodriguez', role: 'Wellness Coach', bio: 'David takes a holistic approach to health, focusing on both physical and mental well-being.' },
  ];

  const IconComponent = tabContent[selectedTab].icon;

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-4xl font-bold mb-8 text-center text-green-600"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Suwanee Health Hub
        </motion.h1>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
          <div className="flex border-b">
            {Object.keys(tabContent).map((tab) => (
              <button
                key={tab}
                className={`flex-1 py-4 px-6 text-center font-semibold ${
                  selectedTab === tab ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                } transition duration-300`}
                onClick={() => setSelectedTab(tab)}
              >
                {tabContent[tab].title}
              </button>
            ))}
          </div>
          <AnimatePresence exitBeforeEnter>
            <motion.div
              key={selectedTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="p-8"
            >
              <div className="flex items-center mb-4">
                <IconComponent className="w-8 h-8 text-green-500 mr-4" />
                <h2 className="text-2xl font-semibold">{tabContent[selectedTab].title}</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">{tabContent[selectedTab].content}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.h2 
          className="text-3xl font-bold mb-6 text-center text-green-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Meet Our Team
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div 
              key={member.name}
              className="bg-white p-6 rounded-lg shadow-md cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setExpandedMember(expandedMember === index ? null : index)}
            >
              <User className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-center">{member.name}</h3>
              <p className="text-gray-600 text-center mb-4">{member.role}</p>
              <AnimatePresence>
                {expandedMember === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-gray-700 mt-4">{member.bio}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-12 bg-white p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-6 text-center text-green-600">Visit Us</h2>
          <div className="flex flex-col md:flex-row justify-around items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <MapPin className="w-6 h-6 text-green-500 mr-2" />
              <p className="text-gray-700">123 Wellness Street, Suwanee, GA 30024</p>
            </div>
            <div className="flex items-center">
              <Mail className="w-6 h-6 text-green-500 mr-2" />
              <p className="text-gray-700">info@suwaneehealthhub.com</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
