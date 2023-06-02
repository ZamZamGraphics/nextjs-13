const router = require("express").Router();

// All GET Route
router.get("/", (req, res) => {
  const headerData = [
    {
      subHeading: "আপনার ডিজাইন তৈরী করুন দক্ষ ডিজাইনার দ্বারা",
      heading: "ক্রিয়েটিভ ডিজাইন এবং প্রিন্টিং সেবা",
      imageUrl:
        "https://bananweb.com/wp-content/uploads/2019/04/webdevelopment.svg",
      description:
        "আমরা দক্ষ ও প্রফেশনাল ডিজাইনার এর মাধ্যমে যেকোনো ধরণের লোগো, ব্যানার, ভিজিটিং কার্ড, পোস্টার, লিফলেট, আইডি কার্ড, প্যাড ইত্যাদি ডিজাইন সেবা দিয়ে থাকি। আপনার পছন্দ ও ডিজাইনারের মেধার সমন্বয়েই তৈরী করুন মান সম্মত ক্রিয়েটিভ ডিজাইন।",
    },
    {
      subHeading: "আমরা স্বপ্ন পূরণে সহযোগিতা করি অধিক যত্নে",
      heading: "ওয়েব ডিজাইন এবং ডেভেলপমেন্ট সেবা",
      imageUrl:
        "https://bananweb.com/wp-content/uploads/2019/04/webdevelopment.svg",
      description:
        "যে কোন প্রতিষ্ঠান, নিউজ পোর্টাল, পার্সোনাল ওয়েবসাইট, কাস্টমাইজড ওয়েবসাইট কিংবা অনলাইন সফটওয়্যার বানাতে আমাদের রয়েছে প্রফেশনাল ওয়েব ডেভেলপার। আমরা স্বপ্ন পূরণে সহযোগিতা করি, আপনার স্বপ্নের চেয়েও অধিক যত্নে। আপনার বাজেটের মধ্যেই ওয়েবসাইট তৈরী করুন।",
    },
  ];
  res.status(200).json(headerData);
});

module.exports = router;
