import React, {Component} from 'react';
import "../../code/code.css"
import Groovy from "../../code/Groovy";
import TddGroup from "../../code/TddGroup";

import buildGradle from "./20181010/build-gradle"
import code1 from "./20181010/code-1"
import Java from "../../code/Java";

class Blog extends Component {
    render() {
        return (
            <div>
                <h3>20181010</h3>
                <h2>Setting Up Custom Trace/Spans with Spring Boot and Spring Cloud Sleuth</h2>
                <div>
                    <p>You have got your Spring Boot app up and running and now you want to add some metrics...great!
                        That's the right thing to do. At the end of the day metrics will help you understand how your
                        application is actually being used. Often times developers and product managers have a general
                        idea of what they want to put in front of customers, but they often end up focusing on the wrong
                        things or overlooking key things the user is showing through their behavior due to pre-disposed
                        biases on "Knowing what the customer wants". Metrics are the tool that will separate the signal
                        from the noise and let you make decisions on behaviors that drive usage of a feature vs the
                        chaos of whackamole feature development that invariably ends up in selling vaporware to keep
                        your stakeholders feeling like progress is just around the corner. Additionally we've all been
                        part of those emotionally charged debates in your Retros and Techtros. By having higher sources
                        of truth you can start basing decisions on facts.</p>
                    <p>Now just like with machine learning there is a certain level of foresight you must have. You can
                        measure anything and make it tell you an answer, it just may not be to the right question.
                        Making sure you are asking the right question is a conversation in itself....I digress. A
                        conversation for another day.</p>
                    <p>Let's show how we get metrics up on your Spring Boot app.</p>
                </div>
                <div>
                    <h3>Getting the Tools</h3>
                    <p>We'll create a Spring Boot app using the Spring Boot CLI. You can alternatively navigate to <a
                        href="https://start.spring.io">start.spring.io</a> which will generate a zip for you that you
                        can work from.</p>
                    <p>I am a big fan of working from the terminal so I'll show you how to go that route. We'll start by
                        installing the Spring Boot CLI</p>

                    <h4>Mac:</h4>
                    <p>
                        Using Homebrew install with the commmand <code>brew tap pivotal/tap && brew install
                        springboot</code>
                    </p>

                    <h4>Windows:</h4>
                    <p>
                        Using scoop to install run:
                        <p><code>scoop bucket add extras</code></p>
                        <p><code> scoop install springboot</code></p>
                    </p>

                    <h4>Manual:</h4>
                    <p>
                        You can download the Spring CLI distribution from the <a
                        href="https://repo.spring.io/release/org/springframework/boot/spring-boot-cli">Spring software
                        repository</a>:

                        Download a Zip or tarball from the above URL using the latest RELEASE

                        Cutting edge snapshot distributions are also available.

                        Once downloaded, follow the INSTALL.txt instructions from the unpacked archive. In summary,
                        there is a spring script (spring.bat for Windows) in a bin/ directory in the .zip file.
                        Alternatively, you can use java -jar with the .jar file (the script helps you to be sure that
                        the classpath is set correctly).
                    </p>
                </div>
                <div>
                    <h3>Creating the App</h3>
                    <p>
                        From your working directory run: <code> spring init --build=gradle -g=rocks.mcnichol
                        -d=web,cloud-starter-sleuth my-app</code>
                    </p>

                    <p>
                        This creates a folder named <code>my-app</code> which will have the skeleton of your project.
                        Going inside that directory you will find that you have a build.gradle file which should look
                        similar to this:
                    </p>

                    <Groovy code={buildGradle.groovy}/>

                    <p>Looks great!</p>

                    <p>
                        A clean gradle file is something worth appreciating, gotta give credit where credit is due.
                        One thing that is subtle but really important for how I like to maintain my build scripts is
                        that they extracted the springBootVersion and springCloudVersion into variables. Often what I
                        ultimately will do is source these from a variables file making it easy for me to keep things
                        updated. Bravo Spring Team!
                    </p>

                    <p>
                        I advocate for Gradle because the groovy scripting underneath opens you up to significant
                        flexibility. The problem (and I've had this conversation with many junior devs) is that you
                        can get away with so much that at some point your hands are tied and everything you touch seems
                        to break something else making it appear brittle.
                    </p>

                    <p>
                        Somewhere around this point is where I see a dev throw their hands up in despair and
                        blame the tool which I find somewhat unfair. If anything, I'd argue the problem is that the
                        gradle structure has so many disparate tasks that are somewhat unobvious. To the untrained
                        developer it is all magic working in the background. Short of valid syntax, there is limited
                        clarity on the errors or side-effects that you have created and you lay at the mercy of
                        documentation...which every camp suffers from in one way or another. Arguably one can say this
                        is what your IDE is for. The alternative being Maven (which many of the greats I respect
                        immensely wave the banner for, I just can't love XML for my build tooling. It reminds me of a
                        quote I heard: "XML is like violence, if you aren't getting the results you want, you probably
                        aren't using enough."
                    </p>

                    <p>
                        My rule at the end of the day is if you want to deviate, you should have a high tolerance for
                        pain. A truly admirable trait in any developer!
                    </p>

                    <p>
                        Now we let's load up the Spring Boot application. Using the Spring Boot CLI the skeleton is
                        there with a runnable application. I typically set my app in a side-by-side, test on the left,
                        implementation on the right like below:
                    </p>

                    <TddGroup test={<Java code={code1.test}/>} impl={<Java code={code1.impl}/>}> </TddGroup>

                    <p>
                        In order to see the Trace and Span Id's made from Spring Cloud Sleuth, we need to hit an endpoint
                        and fire off a log message. We can start with a few tests, then write the implementation.
                    </p>
                </div>
            </div>
        )
    }
}

export default Blog;