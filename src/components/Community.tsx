

const stats = [
  { number: "500+", label: "Instagram followers" },
  { number: "300+", label: "Active users" },
  { number: "500+", label: "Products reviewed" },
];

const Community = () => {
  return (
    <section id="community" className="relative px-6 pt-16 pb-24 overflow-hidden">
            
      <div className="container mx-auto max-w-6xl mb-[200px]">
        <div className="bg-purple rounded-[3rem] space-y-12 ">

          <div className="text-center space-y-3  relative z-10">
            <h2 className="font-garamond text-3xl md:text-4xl font-normal">
            
              Join India's fastest growing skincare community
              
            </h2>
            <p className="text-lg md:text-xl font-medium text-muted-foreground max-w-3xl mx-auto leading-[25px]">
              LesSkyn isn’t just an app, its a movement. We are building a community of informed and enthusiastic users who take control of their skincare journey. 
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-10 text-center space-y-2"
              >
                <div className="font-garamond font-normal text-[64px] leading-[64px] text-center">
                  {stat.number}
                </div>
                <div className="font-montserrat font-medium text-[28px] leading-[32px] text-black/50 text-center">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
