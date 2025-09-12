function HODDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">
        HOD Dashboard
      </h1>

      {/* Dashboard Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Club Details */}
        <Card className="shadow-lg rounded-2xl">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <Users className="w-6 h-6 text-blue-600 mr-2" />
              <h2 className="text-xl font-semibold">Clubs Overview</h2>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Club A - 35 Members</li>
              <li>Club B - 42 Members</li>
              <li>Club C - 28 Members</li>
            </ul>
          </CardContent>
        </Card>

        {/* Faculty List */}
        <Card className="shadow-lg rounded-2xl">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <BookOpen className="w-6 h-6 text-green-600 mr-2" />
              <h2 className="text-xl font-semibold">Faculty Incharge</h2>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li>Prof. Sharma – Club A</li>
              <li>Prof. Iyer – Club B</li>
              <li>Prof. Patel – Club C</li>
            </ul>
          </CardContent>
        </Card>

        {/* Events (Faculty CRUD, HOD view only) */}
        <Card className="shadow-lg rounded-2xl col-span-1 md:col-span-2">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <ClipboardList className="w-6 h-6 text-purple-600 mr-2" />
              <h2 className="text-xl font-semibold">Club Events</h2>
            </div>
            <table className="w-full border text-gray-700">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-2 border">Event</th>
                  <th className="p-2 border">Club</th>
                  <th className="p-2 border">Date</th>
                  <th className="p-2 border">Faculty</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border">Hackathon</td>
                  <td className="p-2 border">Club A</td>
                  <td className="p-2 border">15 Sep 2025</td>
                  <td className="p-2 border">Prof. Sharma</td>
                </tr>
                <tr>
                  <td className="p-2 border">Workshop</td>
                  <td className="p-2 border">Club B</td>
                  <td className="p-2 border">22 Sep 2025</td>
                  <td className="p-2 border">Prof. Iyer</td>
                </tr>
              </tbody>
            </table>
          </CardContent>
        </Card>

        {/* Requests (Faculty Approved/Rejected) */}
        <Card className="shadow-lg rounded-2xl col-span-1 md:col-span-2">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <CheckCircle className="w-6 h-6 text-orange-600 mr-2" />
              <h2 className="text-xl font-semibold">Requests Status</h2>
            </div>
            <table className="w-full border text-gray-700">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-2 border">Request</th>
                  <th className="p-2 border">Student</th>
                  <th className="p-2 border">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border">Join Club A</td>
                  <td className="p-2 border">Rahul</td>
                  <td className="p-2 border text-green-600">Approved</td>
                </tr>
                <tr>
                  <td className="p-2 border">Join Club C</td>
                  <td className="p-2 border">Neha</td>
                  <td className="p-2 border text-red-600">Rejected</td>
                </tr>
              </tbody>
            </table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HODDashboard;
