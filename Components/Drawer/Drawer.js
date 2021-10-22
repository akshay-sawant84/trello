import React, { useState, useEffect } from "react";
import styles from "../../styles/Drawer.module.css";

const SideDrawer = ({ open, onClose }) => {
  const [drawerClasses, setdrawerClasses] = useState(`${styles.sideDrawer}`);

  useEffect(() => {
    if (open === true) {
      setdrawerClasses(`${styles.sideDrawer} ${styles.open}`);
    } else {
      setdrawerClasses(`${styles.sideDrawer}`);
    }
  }, [open]);

  return (
    <div className={drawerClasses}>
      <div className="row mx-3">
        <div className="d-flex justify-content-between py-3 w-100 border-bottom">
          <h6 className="mb-0">Menu</h6>
          <span className="float-right btn p-0" onClick={() => onClose()}>
            X
          </span>
        </div>
        <div className="py-2 border-bottom w-100">
          <button className="btn d-block px-0">About this board</button>
          <button className="btn d-block px-0">More</button>
        </div>
        <div className="py-3">
          <h6>Activity</h6>

          <div>
            <div class={`${styles.phenom} ${styles.modAttachmentType}`}>
              <div class={`${styles.phenomCreator}`}>
                <div
                  class={`${styles.member} js-show-mem-menu`}
                  idmember="4f5f50c31deb09a004b73c05"
                >
                  <span
                    class={`${styles.memberInitials}`}
                    title="Andrew Hyde (andrewhyde)"
                    aria-label="Andrew Hyde (andrewhyde)"
                  >
                    AH
                  </span>
                </div>
              </div>
              <div class={`${styles.phenomDesc}`}>
                <span
                  class="inline-member js-show-mem-menu"
                  idmember="4f5f50c31deb09a004b73c05"
                >
                  <span class="u-font-weight-bold">Andrew Hyde</span>
                </span>{" "}
                made this board visible to the public
              </div>
              <div class={`${styles.phenomMeta} quiet`}>
                <span
                  class="date js-hide-on-sending past"
                  dt="2012-03-13T15:21:39.299Z"
                  href=""
                  title="March 13, 2012 8:51 PM"
                >
                  Mar 13, 2012 at 8:51 PM
                </span>
              </div>
            </div>
            <div class={`${styles.phenom} ${styles.modAttachmentType}`}>
              <div class={`${styles.phenomCreator}`}>
                <div
                  class={`${styles.member} js-show-mem-menu`}
                  idmember="4f5f50c31deb09a004b73c05"
                >
                  <span
                    class={`${styles.memberInitials}`}
                    title="Andrew Hyde (andrewhyde)"
                    aria-label="Andrew Hyde (andrewhyde)"
                  >
                    AH
                  </span>
                </div>
              </div>
              <div class={`${styles.phenomDesc}`}>
                <span
                  class="inline-member js-show-mem-menu"
                  idmember="4f5f50c31deb09a004b73c05"
                >
                  <span class="u-font-weight-bold">Andrew Hyde</span>
                </span>{" "}
                made this board visible to the public
              </div>
              <div class={`${styles.phenomMeta} quiet`}>
                <span
                  class="date js-hide-on-sending past"
                  dt="2012-03-13T15:21:39.299Z"
                  href=""
                  title="March 13, 2012 8:51 PM"
                >
                  Mar 13, 2012 at 8:51 PM
                </span>
              </div>
            </div>
            <div class={`${styles.phenom} ${styles.modAttachmentType}`}>
              <div class={`${styles.phenomCreator}`}>
                <div
                  class={`${styles.member} js-show-mem-menu`}
                  idmember="4f5f50c31deb09a004b73c05"
                >
                  <span
                    class={`${styles.memberInitials}`}
                    title="Andrew Hyde (andrewhyde)"
                    aria-label="Andrew Hyde (andrewhyde)"
                  >
                    AH
                  </span>
                </div>
              </div>
              <div class={`${styles.phenomDesc}`}>
                <span
                  class="inline-member js-show-mem-menu"
                  idmember="4f5f50c31deb09a004b73c05"
                >
                  <span class="u-font-weight-bold">Andrew Hyde</span>
                </span>{" "}
                made this board visible to the public
              </div>
              <div class={`${styles.phenomMeta} quiet`}>
                <span
                  class="date js-hide-on-sending past"
                  dt="2012-03-13T15:21:39.299Z"
                  href=""
                  title="March 13, 2012 8:51 PM"
                >
                  Mar 13, 2012 at 8:51 PM
                </span>
              </div>
            </div>
            <div class={`${styles.phenom} ${styles.modAttachmentType}`}>
              <div class={`${styles.phenomCreator}`}>
                <div
                  class={`${styles.member} js-show-mem-menu`}
                  idmember="4f5f50c31deb09a004b73c05"
                >
                  <span
                    class={`${styles.memberInitials}`}
                    title="Andrew Hyde (andrewhyde)"
                    aria-label="Andrew Hyde (andrewhyde)"
                  >
                    AH
                  </span>
                </div>
              </div>
              <div class={`${styles.phenomDesc}`}>
                <span
                  class="inline-member js-show-mem-menu"
                  idmember="4f5f50c31deb09a004b73c05"
                >
                  <span class="u-font-weight-bold">Andrew Hyde</span>
                </span>{" "}
                made this board visible to the public
              </div>
              <div class={`${styles.phenomMeta} quiet`}>
                <span
                  class="date js-hide-on-sending past"
                  dt="2012-03-13T15:21:39.299Z"
                  href=""
                  title="March 13, 2012 8:51 PM"
                >
                  Mar 13, 2012 at 8:51 PM
                </span>
              </div>
            </div>
            <div class={`${styles.phenom} ${styles.modAttachmentType}`}>
              <div class={`${styles.phenomCreator}`}>
                <div
                  class={`${styles.member} js-show-mem-menu`}
                  idmember="4f5f50c31deb09a004b73c05"
                >
                  <span
                    class={`${styles.memberInitials}`}
                    title="Andrew Hyde (andrewhyde)"
                    aria-label="Andrew Hyde (andrewhyde)"
                  >
                    AH
                  </span>
                </div>
              </div>
              <div class={`${styles.phenomDesc}`}>
                <span
                  class="inline-member js-show-mem-menu"
                  idmember="4f5f50c31deb09a004b73c05"
                >
                  <span class="u-font-weight-bold">Andrew Hyde</span>
                </span>{" "}
                made this board visible to the public
              </div>
              <div class={`${styles.phenomMeta} quiet`}>
                <span
                  class="date js-hide-on-sending past"
                  dt="2012-03-13T15:21:39.299Z"
                  href=""
                  title="March 13, 2012 8:51 PM"
                >
                  Mar 13, 2012 at 8:51 PM
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideDrawer;
