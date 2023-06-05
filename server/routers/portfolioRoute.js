const router = require("express").Router();

// All GET Route
router.get("/", (req, res) => {
  const portfolioItems = [
    {
      id: 1,
      imageUrl:
        "https://zamzamgraphics.github.io/ZamZamGraphics/projects/bhorerpotro.jpg",
      title: "ভোরের পত্র",
      projectUrl: "https://bhorerpotro.com",
    },
    {
      id: 2,
      imageUrl:
        "https://zamzamgraphics.github.io/ZamZamGraphics/projects/bornotv.jpg",
      title: "বর্ণ টিভি",
      projectUrl: "https://borno.tv",
    },
    {
      id: 3,
      imageUrl:
        "https://zamzamgraphics.github.io/ZamZamGraphics/projects/brahmanbarianews24.jpg",
      title: "ব্রাহ্মণবাড়িয়া নিউজ ২৪",
      projectUrl: "https://brahmanbarianews24.net/",
    },
    {
      id: 4,
      imageUrl:
        "https://zamzamgraphics.github.io/ZamZamGraphics/projects/dailyfrontier.jpg",
      title: "ডেইলি ফ্রন্টিয়ার",
      projectUrl: "https://dailyfrontier.news/",
    },
    {
      id: 5,
      imageUrl:
        "https://zamzamgraphics.github.io/ZamZamGraphics/projects/khobordinrat.jpg",
      title: "খবর দিনরাত",
      projectUrl: "https://khobordinrat.com/",
    },
    {
      id: 6,
      imageUrl:
        "https://zamzamgraphics.github.io/ZamZamGraphics/projects/ovizan24.jpg",
      title: "অভিযান ২৪",
      projectUrl: "https://ovizan24.com/",
    },
    {
      id: 7,
      imageUrl:
        "https://zamzamgraphics.github.io/ZamZamGraphics/projects/somoykalnews.jpg",
      title: "সময়কাল নিউজ",
      projectUrl: "https://somoykalnews.com/",
    },
    {
      id: 8,
      imageUrl:
        "https://zamzamgraphics.github.io/ZamZamGraphics/projects/tepantor.jpg",
      title: "তেপান্তর",
      projectUrl: "https://tepantor.net/",
    },
  ];
  res.status(200).json(portfolioItems);
});

module.exports = router;
