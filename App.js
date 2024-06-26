import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

// Importing components (to be created)
import Home from './components/Home';
import About from './components/About';
import HealthTips from './components/HealthTips';
import Events from './components/Events';
import Contact from './components/Contact';

const App = () => {
  const [theme, setTheme] = useState('light');
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  const pageVariants = {
    initial: { opacity: 0, x: "-100vw" },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: "100vw" }
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5
  };

  return (
    <Router>
      <div className={`app ${theme}`}>
        <nav className="flex justify-between items-center p-4 bg-gradient-to-r from-green-400 to-blue-500">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-2xl font-bold text-white"
          >
            Suwanee Health Hub
          </motion.div>
          <div className="hidden md:flex space-x-4">
            <Link to="/" className="text-white hover:text-green-200 transition duration-300">Home</Link>
            <Link to="/about" className="text-white hover:text-green-200 transition duration-300">About</Link>
            <Link to="/health-tips" className="text-white hover:text-green-200 transition duration-300">Health Tips</Link>
            <Link to="/events" className="text-white hover:text-green-200 transition duration-300">Events</Link>
            <Link to="/contact" className="text-white hover:text-green-200 transition duration-300">Contact</Link>
          </div>
          <div className="flex items-center space-x-4">
            <button onClick={toggleTheme} className="p-2 rounded-full bg-white text-gray-800">
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button 
              className="md:hidden text-white"
              onClick={() => setIsNavOpen(!isNavOpen)}
            >
              ☰
            </button>
          </div>
        </nav>
        
        {isNavOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-green-400 p-4"
          >
            <Link to="/" className="block text-white py-2">Home</Link>
            <Link to="/about" className="block text-white py-2">About</Link>
            <Link to="/health-tips" className="block text-white py-2">Health Tips</Link>
            <Link to="/events" className="block text-white py-2">Events</Link>
            <Link to="/contact" className="block text-white py-2">Contact</Link>
          </motion.div>
        )}

        <AnimatePresence exitBeforeEnter>
          <Switch>
            <Route exact path="/">
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Home />
              </motion.div>
            </Route>
            <Route path="/about">
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <About />
              </motion.div>
            </Route>
            <Route path="/health-tips">
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <HealthTips />
              </motion.div>
            </Route>
            <Route path="/events">
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Events />
              </motion.div>
            </Route>
            <Route path="/contact">
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Contact />
              </motion.div>
            </Route>
          </Switch>
        </AnimatePresence>

        <footer className="bg-gray-800 text-white p-4 mt-8">
          <div className="container mx-auto text-center">
            © 2024 Suwanee Health Hub. All rights reserved.
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
