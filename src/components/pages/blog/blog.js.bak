import React, {Component} from 'react';
import Groovy from "../../code/groovy";
import TddGroup from "../../code/tdd-group";

import buildGradle from "./20181010/build-gradle"
import code1 from "./20181010/code-1"
import code2 from "./20181010/code-2"
import code3 from "./20181010/code-3"
import Java from "../../code/java";

import "./blog.scss"

class Blog extends Component {
    render() {
        return (
            <div className="posts">
                <h3>20181010</h3>
                <h2>Setting Up Custom Trace/Spans with Spring Boot and Spring Cloud Sleuth</h2>
                <div>
                    <h3>Overview:</h3>
                    <p>
                        You have got your Spring Boot app up and running and now you want to add some metrics...great!
                        That's the right thing to do. At the end of the day metrics will help you understand how your
                        application is actually being used. Often times developers and product managers have a general
                        idea of what they want to put in front of customers, but they often end up focusing on the wrong
                        things or overlooking key things the user is showing through their behavior due to pre-disposed
                        biases on "Knowing what the customer wants". Metrics are the tool that will separate the signal
                        from the noise and let you make decisions on behaviors that drive usage of a feature vs the
                        chaos of whackamole feature development that invariably ends up in selling vaporware to keep
                        your stakeholders feeling like progress is just around the corner. Additionally we've all been
                        part of those emotionally charged debates in your Retros and Techtros. By having higher sources
                        of truth you can start basing decisions on facts and not chase moving targets.
                    </p>
                    <p>
                        There is a certain level of testing, analysis, and iteration we need in order to valdiate our
                        approach. Just like in the field of data-science, you can measure anything and make metrics tell
                        you an answer, it just may not be to the right question. Making sure you are asking the right
                        question is a conversation in itself....I digress. A conversation for another day.
                    </p>
                    <p>
                        Let's show how we get metrics up on your Spring app so we can start answering our own questions.
                    </p>
                </div>
                <div>
                    <h3>Getting the Tools</h3>
                    <p>
                        We'll create a Spring Boot app using the Spring Boot CLI. You can alternatively navigate to <a
                        href="https://start.spring.io">start.spring.io</a> which will generate a zip for you that we
                        can work from.
                    </p>
                    <p>
                        I am a big fan of working from the terminal so I'll show you how to go that route. We'll start
                        by
                        installing the Spring Boot CLI
                    </p>

                    <h4>Mac:</h4>
                    <p>
                        Using Homebrew install with the commmand <code>brew tap pivotal/tap && brew install
                        springboot</code>
                    </p>

                    <h4>Windows:</h4>
                    <p>Using scoop to install run:</p>
                    <span><code>scoop bucket add extras</code></span><br/>
                    <span><code>scoop install springboot</code></span>

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
                        In order to see the Trace and Span Id's made from Spring Cloud Sleuth, we need to hit an
                        endpoint
                        and fire off a log message. We can start with a few tests, then write the implementation.
                    </p>

                    <p>
                        At this point we have the basics of spinning up a simple application with the skeleton sitting
                        in front of our repo. From here on we'll be pretty brief with the import statements at the top
                        of our code alongside not being repetitive with code, only showing the parts that are new. To
                        see the complete application you can see the working <a
                        href="https://github.com/mcnichol/spring-sleuth-custom-logging.git">Custom Spring Trace App</a> in
                        Github.
                    </p>


                </div>
                <div>
                    <h3>Test Driving the App</h3>

                    <p>
                        Because this is not about test driving a RestController, we are going to assume that this was
                        already driven out through tests (although we will certainly test our way through that in other
                        blogs as there are a few tools I've made to make that process a little bit cleaner alongside
                        many of the things afforded to you by Spring). Here is the code below that should exist:
                    </p>
                    <TddGroup test={<Java code={code2.test}/>} impl={<Java code={code2.impl}/>}> </TddGroup>
                </div>
                <div>
                    <h3>Testing our controller for a Custom trace Span</h3>

                    <p>
                        I'm going to assume you know what a trace and span, otherwise you probably wouldn't be here but
                        for complete-ness you can read up on it at the [Spring documentation
                        site](https://cloud.spring.io/spring-cloud-sleuth/single/spring-cloud-sleuth.html).
                    </p>
                    <p>
                        TL;DR - It adds a unique ID to each Request/Response and provides some tooling to visualize this
                        flow for traceability.
                    </p>
                    <p>
                        What happens when you need to customize this. Your engineers now need to follow some pattern
                        your organization has picked up in logging. You may need to modify the logging pattern because
                        when it randomly shows up as all 16 digits (which it will) it flags your security scans with a
                        false positive appearing like the PII of Credit Cards showing up in logs!!!
                    </p>
                    <p>
                        Not a big deal but the simple solution can be un-obvious. Let's write a test and then I will
                        show you two ways to implement this. The test is slightly tricky for new TDD'ers but it will
                        highlight a key concept in the <a href="https://12factor.net/">12 Factor App</a> model - <a
                        href="https://12factor.net/logs">XI Logs as Event Streams</a>.
                    </p>
                    <h4><code>AppControllerIntegrationTest.java</code></h4>
                    <Java code={code3.test}/>
                    <p>
                        That was it?
                    </p>
                    <p>
                        Yes. At the end of the day we operate with the understanding that our logs are streams of data
                        and they should be saved off to some store where they can be later indexed, parsed, and searched
                        in near realtime. This is typically done using platforms like Kibana, Splunk, or S3 Glacier
                        stores. If you are using a PaaS like PCF, all of this forwarding of logs is done transparently
                        to the AppDev whereas running your own Webserver you will be responsible for forwarding these
                        logs on to whatever final resting place. What we have done in our test is merely shortcut the
                        system and instead of logging out to the console, we are merely
                        intercepting <code>System.out</code> and dumping to a ByteArrayOutputStream wrapped in a
                        PrintStream.
                    </p>
                    <p>
                        Let's throw together an even simpler implementation.
                    </p>
                    <h3>Solution 1:</h3>
                    <h4><code>application.yml</code></h4>
                    <Groovy code={code3.impl1}/>
                    <p>
                        As I mentioned, it's going to be so easy, it's merely a one-liner. In your application.yml file
                        under <code>src > main > resources</code> folder you can add this. If you are familiar with
                        configuration of logback in your Java applications, you will find this is pretty
                        straightforward. If not, just know it's a fairly common pattern and should you want to customize
                        your logs, you could do something relatively similar. <a
                        href="https://logback.qos.ch/manual/index.html">[Logback Docs]</a>
                    </p>
                    <h3>Solution 2:</h3>
                    <p>
                        In this approach it will be slightly more involved so I'll explain first. We are going to
                        implement our own <code>CurrentTraceContext</code> and supply it to Spring. When Spring is
                        injecting all of the dependencies it will be asked for an slf4jSpanLogger. Instead of supplying
                        the default we will instead provide it our own implementation as shown below in the application
                        config. In our apps config we return our CustomTraceContext letting us modify the logging
                        behavior which can be seen when in the <code>newScope()</code> method
                    </p>
                    <h4><code>AppConfig.java</code></h4>
                    <Java code={code3["impl2-config"]}/>
                    <h4><code>CustomTraceContext.java</code></h4>
                    <Java code={code3.impl2}/>

                </div>
            </div>
        )
    }
}

export default Blog;
