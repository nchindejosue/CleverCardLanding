import React from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowRight, 
  Tag,
  TrendingUp,
  BookOpen,
  Brain,
  Users,
  Lightbulb,
  Target,
  Award,
  Zap
} from 'lucide-react';

const Blog = () => {
  const featuredPost = {
    id: 1,
    title: 'The Hidden Cost of Paperwork: How Administrative Burden is Killing Teacher Passion',
    excerpt: 'A deep dive into the global crisis affecting millions of educators and the innovative solutions that are changing the game.',
    content: 'Research shows that teachers spend up to 30% of their time on administrative tasks, leading to burnout and reduced effectiveness in the classroom...',
    author: 'CleverCard Research Team',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'Research',
    image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Education', 'Research', 'Teacher Burnout', 'Administrative Efficiency']
  };

  const blogPosts = [
    {
      id: 2,
      title: '5 Ways AI Can Help Teachers Without Replacing Them',
      excerpt: 'Exploring how artificial intelligence can augment human teaching rather than replace it, with practical examples from CleverCard users.',
      author: 'Dr. Sarah Mbah',
      date: '2024-01-10',
      readTime: '6 min read',
      category: 'AI & Education',
      image: 'https://images.pexels.com/photos/8471822/pexels-photo-8471822.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['AI', 'Teaching', 'Technology']
    },
    {
      id: 3,
      title: 'From Bamenda to the World: Building EdTech for Emerging Markets',
      excerpt: 'The story behind CleverCard\'s development and why solutions built for developing countries often work better globally.',
      author: 'CleverCard Founders',
      date: '2024-01-05',
      readTime: '10 min read',
      category: 'Company',
      image: 'https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Startup', 'EdTech', 'Africa', 'Innovation']
    },
    {
      id: 4,
      title: 'How to Identify Different Learning Styles in a Crowded Classroom',
      excerpt: 'Practical strategies for recognizing and adapting to diverse learning needs, even with limited resources.',
      author: 'Grace Tabi',
      date: '2024-01-01',
      readTime: '7 min read',
      category: 'Teaching Tips',
      image: 'https://images.pexels.com/photos/8471709/pexels-photo-8471709.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Learning Styles', 'Classroom Management', 'Student Success']
    },
    {
      id: 5,
      title: 'A Parent\'s Guide to Preparing for the First School Leaving Certificate',
      excerpt: 'Everything parents need to know about supporting their children through this crucial examination period.',
      author: 'Emmanuel Fon',
      date: '2023-12-28',
      readTime: '12 min read',
      category: 'Parent Resources',
      image: 'https://images.pexels.com/photos/8471816/pexels-photo-8471816.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Exams', 'Parent Support', 'Student Preparation']
    },
    {
      id: 6,
      title: 'CleverCard Product Update: Version 1.2 is Here!',
      excerpt: 'Discover the latest features including improved OCR accuracy, new analytics dashboards, and enhanced offline capabilities.',
      author: 'Product Team',
      date: '2023-12-20',
      readTime: '4 min read',
      category: 'Product Updates',
      image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Product Update', 'Features', 'Technology']
    },
    {
      id: 7,
      title: 'The Psychology of Student Motivation: What Every Teacher Should Know',
      excerpt: 'Understanding the science behind student motivation and how to apply it in your classroom for better learning outcomes.',
      author: 'Dr. Marie Ngozi',
      date: '2023-12-15',
      readTime: '9 min read',
      category: 'Educational Psychology',
      image: 'https://images.pexels.com/photos/8471820/pexels-photo-8471820.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Psychology', 'Motivation', 'Student Engagement']
    }
  ];

  const categories = [
    { name: 'All Posts', count: 7, icon: BookOpen },
    { name: 'Research', count: 1, icon: TrendingUp },
    { name: 'AI & Education', count: 1, icon: Brain },
    { name: 'Teaching Tips', count: 2, icon: Lightbulb },
    { name: 'Parent Resources', count: 1, icon: Users },
    { name: 'Product Updates', count: 1, icon: Zap },
    { name: 'Company', count: 1, icon: Target }
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('All Posts');

  const filteredPosts = selectedCategory === 'All Posts' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-accent-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
              CleverCard <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">Blog</span>
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Insights, research, and stories from the frontlines of educational innovation. 
              Discover how technology is transforming teaching and learning around the world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <div className="flex items-center space-x-2 mb-8">
              <Award className="h-6 w-6 text-primary-600" />
              <span className="text-lg font-semibold text-primary-600">Featured Article</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                    {featuredPost.category}
                  </span>
                  <div className="flex items-center space-x-2 text-neutral-500 text-sm">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-neutral-500 text-sm">
                    <Clock className="h-4 w-4" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>

                <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4 leading-tight">
                  {featuredPost.title}
                </h2>

                <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>

                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-white font-bold">
                    {featuredPost.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900">{featuredPost.author}</p>
                    <p className="text-sm text-neutral-600">Research Team</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {featuredPost.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-gradient-to-r from-primary-600 to-accent-600 text-white px-6 py-3 rounded-xl font-semibold flex items-center space-x-2 hover:shadow-lg transition-all duration-300 group"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories and Posts */}
      <section className="py-20 bg-gradient-to-br from-neutral-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Categories Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-1"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-neutral-100 sticky top-24">
                <h3 className="text-xl font-bold text-neutral-900 mb-6">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category, index) => {
                    const Icon = category.icon;
                    return (
                      <button
                        key={index}
                        onClick={() => setSelectedCategory(category.name)}
                        className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-300 ${
                          selectedCategory === category.name
                            ? 'bg-primary-100 text-primary-700 border border-primary-200'
                            : 'text-neutral-700 hover:bg-neutral-100'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <Icon className="h-4 w-4" />
                          <span className="font-medium">{category.name}</span>
                        </div>
                        <span className="text-sm bg-neutral-200 text-neutral-600 px-2 py-1 rounded-full">
                          {category.count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* Blog Posts Grid */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-8"
              >
                <h2 className="text-3xl font-bold text-neutral-900 mb-2">
                  {selectedCategory === 'All Posts' ? 'Latest Articles' : selectedCategory}
                </h2>
                <p className="text-neutral-600">
                  {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-100 overflow-hidden group"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-white/90 backdrop-blur-sm text-neutral-700 px-3 py-1 rounded-full text-sm font-medium">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center space-x-4 mb-3 text-sm text-neutral-500">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-primary-600 transition-colors duration-300 line-clamp-2">
                        {post.title}
                      </h3>

                      <p className="text-neutral-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                            {post.author.charAt(0)}
                          </div>
                          <span className="text-sm font-medium text-neutral-700">{post.author}</span>
                        </div>

                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="text-primary-600 hover:text-primary-700 font-medium text-sm flex items-center space-x-1 group"
                        >
                          <span>Read More</span>
                          <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform duration-300" />
                        </motion.button>
                      </div>

                      <div className="flex flex-wrap gap-2 mt-4">
                        {post.tags.slice(0, 2).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="bg-neutral-100 text-neutral-600 px-2 py-1 rounded text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                        {post.tags.length > 2 && (
                          <span className="text-neutral-500 text-xs px-2 py-1">
                            +{post.tags.length - 2} more
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>

              {/* Load More Button */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center mt-12"
              >
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-white text-primary-600 border-2 border-primary-600 px-8 py-3 rounded-xl font-semibold hover:bg-primary-600 hover:text-white transition-all duration-300"
                >
                  Load More Articles
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-accent-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-primary-100 mb-8 leading-relaxed">
              Get the latest insights on education technology, teaching strategies, 
              and CleverCard updates delivered to your inbox.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl border-0 focus:ring-2 focus:ring-white/50 outline-none"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary-600 px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 whitespace-nowrap"
              >
                Subscribe
              </motion.button>
            </div>

            <p className="text-primary-200 text-sm mt-4">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;