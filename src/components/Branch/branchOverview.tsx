import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";


const BranchOverview = () => {
  const activities = new Array(8).fill({
    title: "Notes Created",
    desc: "Create | Rev - Study Material Created",
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-white to-pink-100 px-6 py-6">
      <h2 className="text-2xl font-semibold text-[#ca406f] mb-6">Branch Overview</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="col-span-2 space-y-6">
          <div className="flex flex-wrap gap-4">
            <Card className="flex-1 min-w-[180px] h-[120px] rounded-xl p-4 bg-gradient-to-br from-[#9747FF] to-[#7B61FF] text-white shadow-md">
              <h4 className="text-sm font-medium">Profits</h4>
              <p className="text-2xl font-bold mt-2">12345</p>
            </Card>

            <Card className="flex-1 min-w-[180px] h-[120px] rounded-xl p-4 bg-gradient-to-br from-[#2FD9B9] to-[#64D864] text-white shadow-md">
              <h4 className="text-sm font-medium">Payouts</h4>
              <p className="text-2xl font-bold mt-2">1234</p>
            </Card>

            <Card className="flex-1 min-w-[180px] h-[120px] rounded-xl p-4 bg-gradient-to-br from-[#F96363] to-[#FFD700] text-white shadow-md">
              <h4 className="text-sm font-medium">Courses</h4>
              <p className="text-2xl font-bold mt-2">098</p>
            </Card>
          </div>

        
          <Card className="p-4 rounded-xl shadow-md bg-white">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Statistics</h4>

            
            <div className="flex gap-6 text-sm font-medium text-gray-500 border-b pb-2 mb-4">
              <span className="text-[#2FD9B9] border-b-2 border-[#2FD9B9] pb-1">Fee</span>
              <span>Salary</span>
              <span>Pendings</span>
              <span>Total Income</span>
            </div>

            
            <div className="text-gray-400 text-sm italic">[Graph Placeholder]</div>
          </Card>
        </div>

        
        <Card className="rounded-xl shadow-md bg-white max-h-[500px]">
          <CardContent className="p-4">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Recent Activities</h4>

            <ScrollArea className="h-[420px] pr-2">
              <div className="space-y-3">
                {activities.map((item, idx) => (
                  <div
                    key={idx}
                    className={`flex items-start gap-3 rounded-lg p-3 ${
                      idx === 2 ? "bg-[#ca406f] text-white" : "bg-[#f7f7f7] "
                    }`}
                  >
                    <div className="w-10 h-10 mt-1 rounded-full bg-[#ca406f]" />
                    <div>
                      <p className="font-medium text-sm">
                        {item.title}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BranchOverview;
