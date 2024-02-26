import React from "react";
import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
  return (
    <>
      <aside className="sidebar">
        <div className="flex size-full flex-col gap-4">
          <Link href="/" className="sidebar-logo">
            <Image
              src="/assets/images/360_F_261225526_i66baCH2IIiMwqpH6VHDGSQE5pVuzmJX.webp"
              alt="logo"
              width={50}
              height={30}
            />
          </Link>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
