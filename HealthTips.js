import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Zap, Apple, Moon } from 'lucide-react';

const HealthTips = () => {
  const [selectedCategory, setSelectedCategory] = useState('nutrition');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredTips, setFilteredTips] = useState([]);

  const categories = [
    { id: 'nutrition', name: 'Nutrition', icon: Apple },
    { id: 'fitness', name: 'Fitness', icon: Zap },
    { id: 'mentalHealth', name: 'Mental Health', icon: Heart },
    { id: 'sleep', name: 'Sleep', icon: Moon },
  ];

  const allTips = {
    nutrition: [
      { id: 1, title: 'Balanced Diet', content: 'Aim for a balanced diet with a variety of fruits, vegetables, whole grains, and lean proteins.' },
      { id: 2, title: 'Portion Control', content: 'Practice portion control to maintain a healthy weight and improve digestion.' },
      { id: 3, title: 'Hydration', content: 'Stay hydrated by drinking at least 8 glasses of water daily.' },
    ],
    fitness: [
      { id: 4, title: 'Regular Exercise', content: 'Aim for at least 150 minutes of moderate-intensity exercise per week.' },
      { id: 5, title: 'Strength Training', content: 'Incorporate strength training exercises at least twice a week to build muscle and boost metabolism.' },
      { id: 6, title: 'Active Lifestyle', content: 'Find ways to stay active throughout the day, like taking the stairs or going for short walks.' },
    ],
    mentalHealth: [
      { id: 7, title: 'Mindfulness', content: 'Practice mindfulness or meditation to reduce stress and improve mental clarity.' },
      { id: 8, title: 'Social Connections', content: 'Maintain strong social connections to support your mental well-being.' },
      { id: 9, title: 'Stress Management', content: 'Develop healthy coping mechanisms for stress, such as deep breathing or journaling.' },
    ],
    sleep: [
        { id: 10, title: 'Sleep Schedule', content: 'Maintain a consistent sleep schedule, even on weekends.' },
        { id: 11, title: 'Bedtime Routine', content: 'Create a relaxing bedtime routine to signal your body it\'s time to sleep.' },
        { id: 12, title: 'Sleep Environment', content: 'Optimize your sleep environment by keeping it cool, dark, and quiet.' },
      ],
    };

  useEffect(() => {
    const filtered = allTips[selectedCategory].filter(tip =>
      tip.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tip.content.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTips(filtered);
  }, [selectedCategory, searchTerm]);

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-4xl font-bold mb-8 text-center text-green-600"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Health Tips
        </motion.h1>

        <div className="mb-8">
          <input
            type="text"
            placeholder="Search health tips..."
            className="w-full p-3 rounded-lg border-2 border-green-300 focus:border-green-500 focus:outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="flex flex-wrap justify-center mb-8">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              className={`flex items-center px-4 py-2 m-2 rounded-full ${
                selectedCategory === category.id ? 'bg-green-500 text-white' : 'bg-white text-green-500'
              } transition duration-300`}
              onClick={() => setSelectedCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <category.icon className="w-5 h-5 mr-2" />
              {category.name}
            </motion.button>
          ))}
        </div>

        <AnimatePresence>
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredTips.map((tip) => (
              <motion.div
                key={tip.id}
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.03 }}
              >
                <h3 className="text-xl font-semibold mb-3 text-green-600">{tip.title}</h3>
                <p className="text-gray-700">{tip.content}</p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredTips.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-gray-600 mt-8"
          >
            No tips found. Try adjusting your search or selecting a different category.
          </motion.p>
        )}
      </div>
    </div>
  );
};

export default HealthTips;