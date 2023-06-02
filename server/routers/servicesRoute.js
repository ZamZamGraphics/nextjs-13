const router = require("express").Router();

// All GET Route
router.get("/", (req, res) => {
  const services = [
    {
      title: "গ্রাফিক্স ডিজাইন",
      slug: "graphics-design",
      icon: "fa-solid fa-layer-group text-primary",
      description:
        "দক্ষ ও অভিজ্ঞ ডিজাইনার দ্বারা নিত্য নতুন ডিজাইন তৈরী করে রুচিশীল কাস্টমারের চাহিদা অনুযায়ী সকল প্রকার ডিজাইন সেবা দিয়ে থাকি।",
    },
    {
      title: "প্রিন্টিং",
      slug: "design-printing",
      icon: "fa-solid fa-bezier-curve text-success",
      description:
        "আমরা যেকোনো ধরণের ব্যানার, পোস্টার, লিফলেট, ক্যাশ মেমো, ভিজিটিং কার্ড, আইডি কার্ড, লেটার হেড (প্যাড) সহ সকল প্রকার প্রিন্টিং সেবা দিয়ে থাকি।",
    },
    {
      title: "ওয়েব ডিজাইন",
      slug: "web-design",
      icon: "fa-solid fa-desktop text-error",
      description:
        "নিউজ পোর্টাল ওয়েবসাইট বানাতে চাচ্ছেন, বিশ্বস্ত ডেভেলপার বা কোম্পানি পাচ্ছেন না। আমরা ওয়েবসাইট মেইনটেনেন্স সহ সকল প্রকার সেবা দিয়ে থাকি।",
    },
    {
      title: "ওয়েব ডেভেলপমেন্ট",
      slug: "web-development",
      icon: "fa-solid fa-code text-warning",
      description:
        "পারসোনাল কিংবা প্রতিষ্ঠানের জন্য আপনার পছন্দ অনুযায়ী ইউনিক ডিজাইনে ওয়েবসাইট বানাতে ওয়েব ডেভেলপার খুঁজছেন? আমরা প্রস্তুত আপনার স্বপ পূরণে।",
    },
  ];
  res.status(200).json(services);
});

module.exports = router;
