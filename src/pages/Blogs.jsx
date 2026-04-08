import './PageStyles.css';

const Blogs = () => {
  const blogs = [
    {
      title: "What is Microsoft Power Platform?",
      description: "Learn how Power Platform helps businesses automate processes and build apps with low-code solutions."
    },
    {
      title: "Top Use Cases of Power Apps",
      description: "Discover real-world use cases where Power Apps improves efficiency and reduces development time."
    },
    {
      title: "How Power Automate Transforms Business",
      description: "Explore how automation can streamline workflows and boost productivity across organizations."
    }
  ];

  return (
    <div className="page pb-20">
      <div className="page-header container text-center pt-12 pb-8">
        <h1 className="section-title text-gradient mb-4">Blogs</h1>
        <p className="section-subtitle max-w-2xl mx-auto">
          Insights, updates, and best practices on leveraging Microsoft Power Platform.
        </p>
      </div>

      <div className="container max-w-5xl mx-auto mt-4 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogs.map((blog, idx) => (
            <div 
              key={idx} 
              className="bg-white shadow-sm hover:shadow-md rounded-[12px] border border-color p-8 flex flex-col h-full transform transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              <h3 className="text-xl font-bold mb-3 text-blue-primary leading-tight">
                {blog.title}
              </h3>
              <p className="text-secondary text-base leading-relaxed mb-0 flex-grow">
                {blog.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
