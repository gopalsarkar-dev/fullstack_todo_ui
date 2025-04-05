"use client";

import { usePathname, useRouter } from "next/navigation";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";

const BottomTab = () => {
  const pathname = usePathname();

  const { push } = useRouter();

  if (
    pathname === "/" ||
    pathname === "/profile" ||
    pathname === "complete" ||
    pathname === "incomplete"
  ) {
    return (
      <>
        <div className="fixed bottom-0 w-full">
          <Tabs value={pathname} onValueChange={(key) => push(key)}>
            <TabsList>
              <TabsTrigger value="/" className="cursor-pointer">
                List-All
              </TabsTrigger>
              <TabsTrigger value="/complete" className="cursor-pointer">
                Completed
              </TabsTrigger>
              <TabsTrigger value="/incomplete" className="cursor-pointer">
                InCompleted
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </>
    );
  }
  return <></>;
};

export default BottomTab;
