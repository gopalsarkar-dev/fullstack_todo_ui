import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { Skeleton } from "../ui/skeleton";

const SkeletonInfo = () => {
  return (
    <>
      <div className="pt-24">
        <Card className="shadow">
          <CardContent className="flex items-center justify-between p-4">
            <div className="flex w-full items-center gap-3">
              <Skeleton className="h-6 w-6">
                {/* <Checkbox className="h-6 w-6 cursor-pointer" /> */}
              </Skeleton>
              <Skeleton className="h-4 w-[350px]"></Skeleton>
            </div>
            <Skeleton className="h-10 w-14"></Skeleton>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default SkeletonInfo;
