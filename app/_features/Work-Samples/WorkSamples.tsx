import HeadTitle from "@/app/_components/HeadTitle";
import WorkButtons from "./WorkButtons";
import { Suspense } from "react";

function WorkSamples() {
  return (
    <>
      <div id="worksamples">
        <HeadTitle
          title="نمونه کار ها"
          description="پروژه هایی که تاکنون انجام داده ام..."
        />
      </div>
      {/* button List */}
      <Suspense>
        <div className="flex items-center justify-center gap-2 flex-wrap">
          <WorkButtons paramsKey="cat" value="all">
            همه
          </WorkButtons>

          <WorkButtons paramsKey="cat" value="application">
            طراحی اپلیکیشن
          </WorkButtons>
          <WorkButtons paramsKey="cat" value="website">
            طراحی وبسایت
          </WorkButtons>
          <WorkButtons paramsKey="cat" value="ui">
            ui/ux
          </WorkButtons>
        </div>
      </Suspense>
      {/* Work Samples */}
      <div className="my-8">
        <div className="h-44 p-4 border border-accent-800 rounded-3xl flex items-center justify-center max-w-screen-md mx-auto">
          <p className="text-4xl font-bold text-center">
            این قسمت در دست توسعه میباشد...👋🏻💖
          </p>
        </div>
      </div>
    </>
  );
}

export default WorkSamples;
