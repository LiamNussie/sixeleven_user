import './education2.scss';
import { useSelector } from 'react-redux';
import moment from 'moment';

const Education2 = ({data}) => {
    const currentUser = useSelector(({userData}) => userData.currentUser)
    const {widowInfo} = currentUser
    return (
        <div className="education2">
            <div className="first">
                <div className="pt">
                    <p className="label">Highest academic Level</p>
                    <p className="val">{widowInfo?.educationLevel}</p>
                </div>
                {/* <div className="pt">
                    <p className="label">Highest class attended</p>
                    <p className="val">{data?.streetHawkerInfo?.classLevel}</p>
                </div> */}
                {/* <div className="pt">
                    <p className="label">Last time in school as at when application was last filled</p>
                    <p className="val">{data?.streetHawkerInfo?.dateInSch}</p>
                </div> */}
            </div>
            <div className="secio">
                     <p className="sub-title"><svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.25 4.24985L5.37502 9.12485C5.07665 9.42322 4.90903 9.82789 4.90903 10.2499C4.90903 10.6718 5.07665 11.0765 5.37502 11.3749C5.67339 11.6732 6.07806 11.8408 6.50002 11.8408C6.92198 11.8408 7.32665 11.6732 7.62502 11.3749L12.5 6.49985C13.0968 5.90311 13.432 5.09376 13.432 4.24985C13.432 3.40594 13.0968 2.59659 12.5 1.99985C11.9033 1.40311 11.0939 1.06787 10.25 1.06787C9.40611 1.06787 8.59676 1.40311 8.00002 1.99985L3.12502 6.87485C2.22992 7.76996 1.72705 8.98398 1.72705 10.2499C1.72705 11.5157 2.22992 12.7297 3.12502 13.6249C4.02013 14.52 5.23415 15.0228 6.50002 15.0228C7.76589 15.0228 8.97992 14.52 9.87502 13.6249L14.75 8.74985" stroke="#AAC5CC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>Attached Results</p>
                    <div className="files">
                        <div className="filex">
                            <div className="left">
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.5641 29.1523C15.1921 29.1523 14.9401 29.1883 14.8101 29.2243V31.6103C14.9641 31.6463 15.1581 31.6563 15.4221 31.6563C16.3921 31.6563 16.9921 31.1643 16.9921 30.3383C16.9921 29.5963 16.4761 29.1523 15.5641 29.1523Z" fill="#03A1C6"/>
                                <path d="M28 4H12C10.9391 4 9.92172 4.42143 9.17157 5.17157C8.42143 5.92172 8 6.93913 8 8V40C8 41.0609 8.42143 42.0783 9.17157 42.8284C9.92172 43.5786 10.9391 44 12 44H36C37.0609 44 38.0783 43.5786 38.8284 42.8284C39.5786 42.0783 40 41.0609 40 40V16L28 4ZM18.06 32.21C17.434 32.796 16.512 33.062 15.434 33.062C15.194 33.062 14.976 33.048 14.81 33.024V35.914H12.998V27.94C13.8154 27.8167 14.6415 27.7612 15.468 27.774C16.594 27.774 17.4 27.988 17.938 28.42C18.454 28.828 18.802 29.5 18.802 30.292C18.802 31.084 18.54 31.754 18.06 32.21ZM26.664 35.916H24.744L23.018 32.796C22.538 31.932 22.01 30.89 21.616 29.942L21.578 29.954C21.626 31.022 21.65 32.162 21.65 33.48V35.916H19.97V27.832H22.104L23.784 30.794C24.264 31.646 24.742 32.654 25.102 33.564H25.14C25.0237 32.4446 24.9717 31.3194 24.984 30.194V27.83H26.664V35.916ZM35.002 35.544C34.1311 35.8323 33.2213 35.986 32.304 36C30.83 36 29.762 35.628 29.016 34.908C28.274 34.212 27.866 33.158 27.878 31.97C27.89 29.282 29.844 27.748 32.496 27.748C33.538 27.748 34.344 27.954 34.738 28.144L34.356 29.606C33.912 29.414 33.36 29.258 32.474 29.258C30.95 29.258 29.798 30.122 29.798 31.874C29.798 33.54 30.842 34.524 32.34 34.524C32.76 34.524 33.096 34.476 33.24 34.402V32.71H31.992V31.284H35.002V35.544ZM28 18H26V8L36 18H28Z" fill="#03A1C6"/>
                            </svg>
                            <div className="txt">
                                <p className="top">Certification</p>
                                <p className="bottom">{moment().calendar(widowInfo?.updatedAt)}</p>
                            </div>
                            </div>
                            <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 14V16C1 16.5304 1.21071 17.0391 1.58579 17.4142C1.96086 17.7893 2.46957 18 3 18H15C15.5304 18 16.0391 17.7893 16.4142 17.4142C16.7893 17.0391 17 16.5304 17 16V14" stroke="#BDBDBD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M4 8L9 13L14 8" stroke="#BDBDBD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M9 1V13" stroke="#BDBDBD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>

                        </div>
                        {/* <div className="filex">
                            <div className="left">
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.534 29.3599C16.166 29.3599 15.918 29.3959 15.79 29.4319V31.7879C15.942 31.8239 16.132 31.8339 16.394 31.8339C17.352 31.8339 17.942 31.3499 17.942 30.5319C17.942 29.7999 17.434 29.3599 16.534 29.3599ZM23.508 29.3839C23.108 29.3839 22.848 29.4199 22.694 29.4559V34.6759C22.848 34.7119 23.096 34.7119 23.32 34.7119C24.954 34.7239 26.018 33.8239 26.018 31.9199C26.03 30.2599 25.06 29.3839 23.508 29.3839Z" fill="#FE4365"/>
                                <path d="M28 4H12C10.9391 4 9.92172 4.42143 9.17157 5.17157C8.42143 5.92172 8 6.93913 8 8V40C8 41.0609 8.42143 42.0783 9.17157 42.8284C9.92172 43.5786 10.9391 44 12 44H36C37.0609 44 38.0783 43.5786 38.8284 42.8284C39.5786 42.0783 40 41.0609 40 40V16L28 4ZM18.996 32.38C18.378 32.96 17.466 33.22 16.404 33.22C16.1981 33.2222 15.9923 33.2102 15.788 33.184V36.036H14V28.164C14.8069 28.0436 15.6222 27.9888 16.438 28C17.552 28 18.344 28.212 18.878 28.638C19.386 29.042 19.73 29.704 19.73 30.484C19.728 31.268 19.468 31.93 18.996 32.38ZM26.61 35.09C25.77 35.788 24.492 36.12 22.93 36.12C21.994 36.12 21.332 36.06 20.882 36V28.166C21.6892 28.0482 22.5043 27.9927 23.32 28C24.834 28 25.818 28.272 26.586 28.852C27.416 29.468 27.936 30.45 27.936 31.86C27.936 33.386 27.378 34.44 26.61 35.09ZM34 29.54H30.936V31.362H33.8V32.83H30.936V36.038H29.124V28.06H34V29.54ZM28 18H26V8L36 18H28Z" fill="#FE4365"/>
                            </svg>

                            <div className="txt">
                                <p className="top">Junior school MOC Results.pdf</p>
                                <p className="bottom">05/10/20</p>
                            </div>
                            </div>
                            <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 14V16C1 16.5304 1.21071 17.0391 1.58579 17.4142C1.96086 17.7893 2.46957 18 3 18H15C15.5304 18 16.0391 17.7893 16.4142 17.4142C16.7893 17.0391 17 16.5304 17 16V14" stroke="#BDBDBD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M4 8L9 13L14 8" stroke="#BDBDBD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M9 1V13" stroke="#BDBDBD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>

                        </div> */}
                    </div>
                </div>
        </div>
    )
}

export default Education2;