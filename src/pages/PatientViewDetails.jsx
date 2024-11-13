import ToolBar from "../components/ToolBar";
import pdfIcon from "../assets/pdf-icon.svg";
import crossIcon from "../assets/cross.svg";

const PatientViewDetails = () => {
  return (
    <div className="bg-[#F9F9FC] h-full">
      <ToolBar />
      <div className="h-[945px] tops-79 p-[32px] flex flex-col gap-y-[20px]">
        <h1 className="font-urbane font-[500] text-[#020617] text-[20px]">
          Patient Details
        </h1>
        <div className="bg-white font-urbane custom-shadow rounded-[12px] py-[43px] px-[25px] flex flex-col gap-[24px] w-[835px] h-[184px]">
          <h1 className="font-[500] text-[19px]">Tabish Bin Tahir</h1>
          <div className="flex">
            <div className="flex flex-col gap-[4px] w-1/3">
              <h2 className="font-[500] text-[16px]">Birth Date</h2>
              <p className="font-roboto text-[14px] text-[#343A45]">
                10/04/1996
              </p>
            </div>
            <div className="flex flex-col gap-[4px] w-1/3">
              <h2 className="font-[500] text-[16px]">Created</h2>
              <p className="font-roboto text-[14px] text-[#343A45]">
                20/12/2024
              </p>
            </div>
            <div className="flex flex-col gap-[4px] w-1/3">
              <h2 className="font-[500] text-[16px]">Last Updated</h2>
              <p className="font-roboto text-[14px] text-[#343A45]">
                10/04/1996
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[20px] h-[561px]">
          <div className="flex gap-[20px]">
            <div className="py-[6px]">
              <p className="font-roboto text-[14px] text-[#020617] tab-text">
                Nutritionist
              </p>
            </div>
            <div className="py-[6px] border-b-[2px] border-b-[#0091F7]">
              <p className="text-[#0091F7] font-roboto text-[14px] tab-text">
                Orthopedist
              </p>
            </div>
            <div className="py-[6px]">
              <p className="font-roboto text-[14px] text-[#020617] tab-text">
                Dermatologist
              </p>
            </div>
          </div>
          <div className="bg-white font-urbane custom-shadow rounded-[12px] pt-[32px] pb-[43px] px-[25px] flex flex-col gap-[24px] w-[835px]">
            <h1 className="font-[500] text-[19px] leading-[22.8px] h-[35px]">
              Tabish Bin Tahir (AI Generated Profile)
            </h1>
            <div className="flex flex-col gap-[17px] items-start">
              <h3 className="font-urbane font-[500] text-[16px] leading-[19px]">
                Summary
              </h3>
              <p className="text-[17px] leading-[19.92px] font-roboto font-[400] text-[#1D3653] h-[98px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, Lorem Ipsum is simply dummy text of
                the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, 
              </p>
              <button className="rounded-[6px] py-[10px] px-[15px] bg-[#C50609] font-roboto text-[14px] text-white leading-[16px]">
                Delete Profile
              </button>
            </div>
            <h2 className="font-urbane font-[500] text-[19px]">Documents</h2>
            <div className="flex gap-[35px] h-[56px]">
              <div className="flex w-1/3 justify-between items-center h-[37px]">
                <div className="flex gap-[17px]">
                  <img src={pdfIcon} alt="pdf Icon" />
                  <div className="flex flex-col font-roboto">
                    <p className="text-[15px]">File Name</p>
                    <p className="text-[14px] text-[#0091F7]">Download</p>
                  </div>
                </div>
                <button className="bg-[#EFF2F7] h-[24px] w-[24px] rounded-[4px] p-[8px]">
                  <img src={crossIcon} alt="close icon" />
                </button>
              </div>
              <div className="flex w-1/3 justify-between items-center h-[37px]">
                <div className="flex gap-[17px]">
                  <img src={pdfIcon} alt="pdf Icon" />
                  <div className="flex flex-col font-roboto">
                    <p className="text-[15px]">File Name</p>
                    <p className="text-[14px] text-[#0091F7]">Download</p>
                  </div>
                </div>
                <button className="bg-[#EFF2F7] h-[24px] w-[24px] rounded-[4px] p-[8px]">
                  <img src={crossIcon} alt="close icon" />
                </button>
              </div>
              <div className="flex w-1/3 justify-between items-center h-[37px]">
                <div className="flex gap-[17px]">
                  <img src={pdfIcon} alt="pdf Icon" />
                  <div className="flex flex-col font-roboto">
                    <p className="text-[15px]">File Name</p>
                    <p className="text-[14px] text-[#0091F7]">Download</p>
                  </div>
                </div>
                <button className="bg-[#EFF2F7] h-[24px] w-[24px] rounded-[4px] p-[8px]">
                  <img src={crossIcon} alt="close icon" />
                </button>
              </div>
            </div>
            <button className="py-[10px] w-[130px] px-[15px] rounded-[6px] bg-[#0091F7] text-white font-roboto text-[14px] leading-[16px]">
                Generate Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientViewDetails;
