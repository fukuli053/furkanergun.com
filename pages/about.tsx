import {NextPage} from "next";
import PageTransition from "../components/PageTransition";
import Link from "next/link";
import meta from "../config";
import A from "../components/a";

const About: NextPage = () => {
    return (
        <PageTransition>
            <div className="c-small">
                <div className="space-y-6">
                    <h1 className="text-highlight text-2xl font-bold">
                        I bring my passion for technology to build awesome, delightful & secure software for everyone.
                    </h1>

                    <p className="text-xl">
                        I was born in 1999. I’ve completed my bachelor’s degree in 2021 at Sakarya University with 3,64 GPA.
                        <br/>
                        <br/>
                        During my free time I like going gym, playing football, playing electric guitar and taking photos. You can check my photos on my <A className={'font-normal hover:font-bold text-decoration-line: underline '} href={"https://unsplash.com/@furkanergun"}>Unsplash</A>.
                        <br/>
                        <br/>

                        You can best contacted with me via email at
                        <br/>
                        <A className={'font-normal hover:font-bold text-decoration-line: underline '} href="mailto:ergunfurkan@outlook.com.tr">ergunfurkan@outlook.com.tr</A>
                    </p>

                    <button
                        className="bg-black text-white hover:bg-white text-black-700 font-semibold hover:text-black py-2 px-4 border border-white hover:border-black rounded">
                        Download Resume
                    </button>
                </div>

                <div className="mt-20">
                    <h1 className="text-highlight text-2xl font-bold">
                        Technologies I frequently use
                    </h1>
                </div>

                <div className="grid grid-cols-6 gap-6 mt-10">
                    {meta.stacks.map(({Icon}, i) => (
                        <div key={i} className={'align-content: center'}>
                            <Icon size="2rem" />
                        </div>
                    ))}
                </div>


                <div className="mt-20">
                    <h1 className="text-highlight text-2xl font-bold">
                        Work Experience
                    </h1>
                </div>

                <div className="mt-8">
                    <ol className="relative border-l border-gray-200 dark:border-gray-700">
                        {meta.experiences.map((exp, index) => {
                            return (
                                <li className="mb-10 ml-10" key={index}>
                                  <span className="absolute -left-3 flex h-8 w-8 items-center justify-center rounded-full bg-blue-900 ring-8 ring-white ring-gray-900">
                                    <img src={exp.companyLogoUrl} alt=""/>
                                  </span>
                                    <Link href={exp.companyUrl}>
                                        <h3 className="mb-1 text-lg font-semibold text-highlight">
                                            {exp.company}
                                        </h3>
                                    </Link>
                                    {exp.positions.map((pos, j) => {
                                        const { title, description, dates } = pos;
                                        const { startDate, endDate } = dates;
                                        return (
                                            <div className="mb-8" key={j}>
                                                <h4 className="text-md font-semibold text-highlight">
                                                    {title}
                                                </h4>
                                                <span className="mb-2 block text-sm font-normal leading-none">
                          {`${startDate.format("MMM YYYY")} - ${
                              endDate ? endDate.format("MMM YYYY") : "Present"
                          }`}
                        </span>
                                                {description && (
                                                    <ul className="ml-4 max-w-prose list-disc">
                                                        {description.map((descrip, index) => (
                                                            <li key={index}>{descrip}</li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </div>
                                        );
                                    })}
                                </li>
                            );
                        })}
                    </ol>
                </div>
            </div>
        </PageTransition>
    );
};

export default About;
