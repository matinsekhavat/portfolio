import HeadTitle from "@/app/_components/HeadTitle";
import WorkButtons from "./WorkButtons";

function WorkSamples() {
  return (
    <>
      <div id="worksamples">
        <HeadTitle
          title="نمونه کار ها"
          description="پروژه هایی که تاکنون انجام داده ام..."
        />
      </div>
      {/* Selection List */}
      <div className="flex items-center justify-center gap-2">
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
    </>
  );
}

export default WorkSamples;
