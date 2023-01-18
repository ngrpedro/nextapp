import React from "react";
import Link from "next/link";

const PartnerForm = () => {
  return (
    <div className="space-y-8">
      <div className="md:grid md:grid-cols-3 md:gap-6 relative">
      <div className="md:col-span-1 py-10 md:py-0 sticky top-0 bg-white border-b md:border-none border-gray-200 z-[100]">
          <div className="px-4 sm:px-0 sticky top-6">
            <h3 className="text-2xl tracking-tight font-extrabold text-gray-800">
              Profile
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              This information will be displayed publicly so be careful what you
              share.
            </p>
          </div>
        </div>
        <div className="mt-5 md:col-span-2 md:mt-0">
          <form action="#" method="POST">
            <div className="overflow-hidden rounded-md border border-gray-300">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 px-4 py-5 sm:p-6">
                <div className="space-y-2 col-span-1 md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Photo
                  </label>
                  <div className="flex items-center justify-start gap-8">
                    <div className="avatar">
                      <div className="w-24 rounded-full">
                        <img src="https://placeimg.com/1000/1000/people" />
                      </div>
                    </div>
                    <input
                      type="file"
                      className="file-input file-input-ghost w-full max-w-xs"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    className="input input-bordered w-full max-w-xs"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last name
                  </label>
                  <input
                    type="text"
                    className="input input-bordered w-full max-w-xs"
                  />
                </div>

                <div className="space-y-2 col-span-1 md:col-span-2">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Bio
                  </label>
                  <textarea
                    className="textarea textarea-bordered w-full"
                    placeholder="Bio"
                  ></textarea>
                </div>

                <div className="form-control space-y-2  col-span-1 md:col-span-2">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <label className="input-group">
                    <span>Email</span>
                    <input
                      type="text"
                      placeholder="info@site.com"
                      className="input input-bordered  w-full"
                    />
                  </label>
                </div>

                <div className="space-y-2 col-span-1 md:col-span-2 mt-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Cover photo
                  </label>
                  <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                    <div className="space-y-1 text-center">
                      <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="flex text-sm text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                        >
                          <span>Upload a file</span>
                          <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            className="sr-only"
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                <Link
                  href="/partners/addPartner/form"
                  className="btn btn-wide normal-case text-lg font-normal bg-blue-600 border-none hover:bg-blue-500"
                >
                  Salvar
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="divider"></div>

      <div className="md:grid md:grid-cols-3 md:gap-6 relative">
        <div className="md:col-span-1 py-10 md:py-0 sticky top-0 bg-white border-b md:border-none border-gray-200 z-[100]">
          <div className="px-4 sm:px-0 sticky top-6">
            <h3 className="text-2xl tracking-tight font-extrabold text-gray-800">
              Um pouco mais sobre você
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              This information will be displayed publicly so be careful what you
              share.
            </p>
          </div>
        </div>

        <div className="mt-5 md:col-span-2 md:mt-0">
          <form action="#" method="POST">
            <div className="overflow-hidden rounded-md border border-gray-300">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 px-4 py-5 sm:p-6">
                <div className="space-y-2">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First name
                  </label>
                  <select className="select select-bordered w-full max-w-xs">
                    <option disabled defaultValue="none">
                      Who shot first?
                    </option>
                    <option>Han Solo</option>
                    <option>Greedo</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last name
                  </label>
                  <select className="select select-bordered w-full max-w-xs">
                    <option disabled defaultValue="none">
                      Who shot first?
                    </option>
                    <option>Han Solo</option>
                    <option>Greedo</option>
                  </select>
                </div>

                <div className="space-y-2 col-span-1 md:col-span-2">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Bio
                  </label>
                  <textarea
                    className="textarea textarea-bordered w-full"
                    placeholder="Bio"
                  ></textarea>
                </div>

                <div className="form-control space-y-2  col-span-1 md:col-span-2">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    More
                  </label>
                  <input
                    type="text"
                    placeholder="More, More, More, More"
                    className="input input-bordered w-full"
                  />
                </div>

                <fieldset className="mt-5">
                  <label
                      htmlFor="first-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      By Email
                    </label>
                    
                    <div className="mt-4 space-y-4">
                      <div className="flex items-start">
                        <div className="flex h-5 items-center">
                          <input
                            id="comments"
                            name="comments"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label
                            htmlFor="comments"
                            className="font-medium text-gray-700"
                          >
                            Comments
                          </label>
                          <p className="text-gray-500">
                            Get notified when someones posts a comment on a
                            posting.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex h-5 items-center">
                          <input
                            id="candidates"
                            name="candidates"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label
                            htmlFor="candidates"
                            className="font-medium text-gray-700"
                          >
                            Candidates
                          </label>
                          <p className="text-gray-500">
                            Get notified when a candidate applies for a job.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex h-5 items-center">
                          <input
                            id="offers"
                            name="offers"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label
                            htmlFor="offers"
                            className="font-medium text-gray-700"
                          >
                            Offers
                          </label>
                          <p className="text-gray-500">
                            Get notified when a candidate accepts or rejects an
                            offer.
                          </p>
                        </div>
                      </div>
                    </div>
                  </fieldset>
              </div>
              <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                <Link
                  href="/partners/addPartner/form"
                  className="btn btn-wide normal-case text-lg font-normal bg-blue-600 border-none hover:bg-blue-500"
                >
                  Salvar
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PartnerForm;
