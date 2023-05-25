import Link from "next/link";

export default function NavItems({ classes, close }) {
  return (
    <ul className={classes}>
      <li onClick={close}>
        <Link href="/">হোম</Link>
      </li>
      <li onClick={close}>
        <Link href="/services">সেবাসমূহ</Link>
      </li>
      <li onClick={close}>
        <Link href="/about-us">আমাদের সম্পর্কে</Link>
      </li>
      <li onClick={close}>
        <Link href="/portfolio">প্রোটফোলিও</Link>
      </li>
      <li onClick={close}>
        <Link href="/service-plan">সেবা পরিকল্পনা</Link>
      </li>
      <li onClick={close}>
        <Link href="/testimonials">সস্তুষ্টি মন্তব্য</Link>
      </li>
      <li onClick={close}>
        <Link href="/contact-us">যোগাযোগ</Link>
      </li>
    </ul>
  );
}
