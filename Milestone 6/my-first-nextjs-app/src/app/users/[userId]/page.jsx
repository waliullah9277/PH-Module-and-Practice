import React from "react";

const UserDetailsPage = async ({ params }) => {
  const { userId } = await params;

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );

  const user = await res.json();

  return (
    <div className="min-h-screen bg-base-200 py-10 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="mb-8">
          <p className="text-sm text-primary font-semibold uppercase tracking-wider">
            User Details
          </p>

          <h1 className="text-3xl md:text-4xl font-bold mt-2">
            {user.name}
          </h1>

          <p className="text-base-content/60 mt-1">
            @{user.username}
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Profile Card */}
          <div className="card bg-base-100 shadow-sm lg:col-span-1">
            <div className="card-body items-center text-center">

              {/* Avatar */}
              <div className="avatar placeholder">
                <div className="bg-primary text-primary-content w-24 rounded-full">
                  <span className="text-3xl font-bold">
                    {user.name.charAt(0)}
                  </span>
                </div>
              </div>

              <h2 className="text-2xl font-bold mt-3">
                {user.name}
              </h2>

              <p className="text-base-content/60">
                @{user.username}
              </p>

              <div className="divider"></div>

              <div className="w-full text-left space-y-3">

                <div>
                  <p className="text-xs text-base-content/50 uppercase">
                    Email
                  </p>

                  <p className="font-medium break-all">
                    {user.email}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-base-content/50 uppercase">
                    Phone
                  </p>

                  <p className="font-medium">
                    {user.phone}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-base-content/50 uppercase">
                    Website
                  </p>

                  <p className="font-medium text-primary">
                    {user.website}
                  </p>
                </div>

              </div>
            </div>
          </div>

          {/* Details */}
          <div className="lg:col-span-2 space-y-6">

            {/* Contact Information */}
            <div className="card bg-base-100 shadow-sm">
              <div className="card-body">

                <h2 className="card-title">
                  Contact Information
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4">

                  <div>
                    <p className="text-sm text-base-content/50">
                      Email
                    </p>

                    <p className="font-semibold break-all">
                      {user.email}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-base-content/50">
                      Phone
                    </p>

                    <p className="font-semibold">
                      {user.phone}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-base-content/50">
                      Website
                    </p>

                    <p className="font-semibold text-primary">
                      {user.website}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-base-content/50">
                      Username
                    </p>

                    <p className="font-semibold">
                      {user.username}
                    </p>
                  </div>

                </div>
              </div>
            </div>

            {/* Address */}
            <div className="card bg-base-100 shadow-sm">
              <div className="card-body">

                <h2 className="card-title">
                  Address
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4">

                  <div>
                    <p className="text-sm text-base-content/50">
                      Street
                    </p>

                    <p className="font-semibold">
                      {user.address.street}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-base-content/50">
                      Suite
                    </p>

                    <p className="font-semibold">
                      {user.address.suite}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-base-content/50">
                      City
                    </p>

                    <p className="font-semibold">
                      {user.address.city}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-base-content/50">
                      Zip Code
                    </p>

                    <p className="font-semibold">
                      {user.address.zipcode}
                    </p>
                  </div>

                </div>

                {/* Geo */}
                <div className="mt-5 p-4 rounded-xl bg-base-200">

                  <p className="text-sm font-semibold mb-2">
                    Location Coordinates
                  </p>

                  <div className="flex flex-wrap gap-4">

                    <span className="badge badge-outline">
                      Latitude: {user.address.geo.lat}
                    </span>

                    <span className="badge badge-outline">
                      Longitude: {user.address.geo.lng}
                    </span>

                  </div>
                </div>

              </div>
            </div>

            {/* Company */}
            <div className="card bg-base-100 shadow-sm">
              <div className="card-body">

                <h2 className="card-title">
                  Company Information
                </h2>

                <div className="mt-4">

                  <h3 className="text-xl font-bold">
                    {user.company.name}
                  </h3>

                  <p className="mt-3 text-base-content/70">
                    {user.company.catchPhrase}
                  </p>

                  <div className="mt-4">

                    <p className="text-sm text-base-content/50">
                      Business
                    </p>

                    <p className="font-medium">
                      {user.company.bs}
                    </p>

                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsPage;