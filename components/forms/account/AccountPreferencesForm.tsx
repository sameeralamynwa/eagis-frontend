"use client";

import { type FormEventHandler } from "react";

export default function AccountPreferencesForm() {
  //   const [errors, setErrors] = useState<
  //     undefined | inferFormattedError<typeof UpateAccountDetailSchema>
  //   >();
  //   const [loading, setLoading] = useState(false);
  //   const { form, set, reset } = useStateForm({
  //     fullName: "Admin User",
  //     username: "admin-123",
  //     about: "",
  //   });

  const submit: FormEventHandler<HTMLFormElement> = async () => {
    // e.preventDefault();
    // setLoading(true);
    // const res = await accountDetailUpdateAction(form);
    // setErrors(res.errors);
    // if (res.message) {
    //   fireToast(res.message);
    // }
    // if (res.success) {
    //   reset();
    // }
    // setLoading(false);
  };

  return (
    <>
      <form onSubmit={submit} className="pb-8">
        {/* <!-- FullName --> */}
        <div>
          <h2 className="text-xl font-semibold leading-6">Account Settings</h2>
        </div>
        <div className="divide-y divide-gray-200 pt-6">
          <div className="">
            <div>
              <h2 className="text-lg font-semibold leading-6">Privacy</h2>
              <p className="mt-1 text-sm ">
                Ornare eu a volutpat eget vulputate. Fringilla commodo amet.
              </p>
            </div>
            <ul role="list" className="mt-2 divide-y divide-gray-200">
              <li className="flex items-center justify-between py-4">
                <div className="flex flex-col">
                  <p className="text-sm" id="privacy-option-1-label">
                    Lorem, ipsum dolor.
                  </p>
                  <p className="text-sm " id="privacy-option-1-description">
                    Nulla amet tempus sit accumsan. Aliquet turpis sed sit
                    lacinia.
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <input
                    type="checkbox"
                    className="switch switch-primary switch-outline"
                    id="1"
                  />
                  <label className="label-text text-base" htmlFor="1"></label>
                </div>
              </li>
              <li className="flex items-center justify-between py-4">
                <div className="flex flex-col">
                  <p className="text-sm" id="privacy-option-2-label">
                    Make account private
                  </p>
                  <p className="text-sm " id="privacy-option-2-description">
                    Pharetra morbi dui mi mattis tellus sollicitudin cursus
                    pharetra.
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <input
                    type="checkbox"
                    className="switch switch-primary switch-outline"
                    id="2"
                  />
                  <label className="label-text text-base" htmlFor="2"></label>
                </div>
              </li>
              <li className="flex items-center justify-between py-4">
                <div className="flex flex-col">
                  <p className="text-sm" id="privacy-option-3-label">
                    Allow commenting
                  </p>
                  <p className="text-sm " id="privacy-option-3-description">
                    Integer amet, nunc hendrerit adipiscing nam. Elementum ame
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <input
                    type="checkbox"
                    className="switch switch-primary switch-outline"
                    id="3"
                  />
                  <label className="label-text text-base" htmlFor="3"></label>
                </div>
              </li>
              <li className="flex items-center justify-between py-4">
                <div className="flex flex-col">
                  <p className="text-sm" id="privacy-option-4-label">
                    Allow mentions
                  </p>
                  <p className="text-sm " id="privacy-option-4-description">
                    Adipiscing est venenatis enim molestie commodo eu gravid
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <input
                    type="checkbox"
                    className="switch switch-primary switch-outline"
                    id="4"
                  />
                  <label className="label-text text-base" htmlFor="4"></label>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <br />
        <div className="text-end">
          <button type="submit" className="btn btn-primary" disabled={false}>
            {false && <span className="loading loading-ring"></span>}
            Save
          </button>
        </div>
      </form>
    </>
  );
}
