window.onload = function() {    

    let modal = document.getElementById("modal");

    if (modal) {
        
        Array.from(document.querySelectorAll(".closeModal")).forEach(function(ele) {
            ele.onclick = function(e) {
                if (e.target != ele) return;
                closeModal();
            }
        })

        function openModal() {
            modal.classList.add("is-open");
            modal.setAttribute("aria-hidden", "false");

            document.querySelector("html").classList.add("modal-open");
            document.querySelector(".home").classList.add("modal-open");
            document.body.classList.add("modal-open");
        }
        function closeModal() {
            document.getElementById("modal").classList.remove("is-open");
            modal.setAttribute("aria-hidden", "true");

            document.querySelector("html").classList.remove("modal-open");
            document.querySelector(".home").classList.remove("modal-open");
            document.body.classList.remove("modal-open");

            let showed = document.querySelector(".project-images img.show");
            if (showed)
                showed.classList.remove("show");
        }
            
        
        
                document.getElementById("writing").onclick = function(e) {
                    if (e.target.tagName == "A")
                        return;

                    document.getElementById("img-writing").className = "show";
                    document.getElementById("modal-title").innerHTML = `Writing with GPT-3<br><small>Ongoing project about collaborative writing between humans and massive scale language models</small>`;
                    
                        document.getElementById("modal-award").innerHTML = "";
                    
                    document.getElementById("modal-extra").innerHTML = `
<div class="extra-links">
    
    
    <a href="https://cci.mit.edu/writing/" target="_blank">
        <i class="fas fa-link" aria-hidden="true"></i> Link
    </a>
    
    
    
    
    
    
</div>


`;
                    document.getElementById("modal-content").innerHTML = `Our ongoing project is about collaborative writing between humans and massive scale language models. I'm particularly excited for this project in that I'm getting a chance to actually use GPT-3! Contact me for more information.`;
                    
                    openModal();
                }
        
                document.getElementById("minglr").onclick = function(e) {
                    if (e.target.tagName == "A")
                        return;

                    document.getElementById("img-minglr").className = "show";
                    document.getElementById("modal-title").innerHTML = `Minglr<br><small>Supporting Ad Hoc, Private Conversations at Virtual Conferences</small>`;
                    
                        document.getElementById("modal-award").innerHTML = "";
                    
                    document.getElementById("modal-extra").innerHTML = `
<div class="extra-links">
    
    
    <a href="https://cci.mit.edu/minglr/" target="_blank">
        <i class="fas fa-link" aria-hidden="true"></i> Link
    </a>
    
    
    
    <a href="https://youtu.be/Xruflul84ik" target="_blank">
        <i class="fas fa-play" aria-hidden="true"></i> Video
    </a>
    
    
    
    
    <a href="https://github.com/CCI-MIT/minglr" target="_blank">
        <i class="fab fa-github" aria-hidden="true"></i> Code
    </a>
    
</div>


`;
                    document.getElementById("modal-content").innerHTML = ``;
                    
                    openModal();
                }
        
                document.getElementById("zatoori").onclick = function(e) {
                    if (e.target.tagName == "A")
                        return;

                    document.getElementById("img-zatoori").className = "show";
                    document.getElementById("modal-title").innerHTML = `Zatoori<br><small>A mobile application that helps people exercise in free time</small>`;
                    
                        document.getElementById("modal-award").innerHTML = "";
                    
                    document.getElementById("modal-extra").innerHTML = `
<div class="extra-links">
    
    
    <a href="https://www.behance.net/gallery/111082311/Zatoori-A-mobile-application-design" target="_blank">
        <i class="fas fa-link" aria-hidden="true"></i> Link
    </a>
    
    
    
    
    
    
</div>


`;
                    document.getElementById("modal-content").innerHTML = ``;
                    
                    openModal();
                }
        
                document.getElementById("truth").onclick = function(e) {
                    if (e.target.tagName == "A")
                        return;

                    document.getElementById("img-truth").className = "show";
                    document.getElementById("modal-title").innerHTML = `Truth101<br><small>Investigating the truth of Produce 101 results through data on Naver TV and DC Inside.</small>`;
                    
                        document.getElementById("modal-award").innerHTML = "";
                    
                    document.getElementById("modal-extra").innerHTML = `
<div class="extra-links">
    
    
    <a href="https://truth-101.github.io/" target="_blank">
        <i class="fas fa-link" aria-hidden="true"></i> Link
    </a>
    
    
    
    
    
    
    <a href="https://github.com/jyoonsong/truth101" target="_blank">
        <i class="fab fa-github" aria-hidden="true"></i> Code
    </a>
    
</div>


`;
                    document.getElementById("modal-content").innerHTML = ``;
                    
                    openModal();
                }
        
                document.getElementById("gaemi").onclick = function(e) {
                    if (e.target.tagName == "A")
                        return;

                    document.getElementById("img-gaemi").className = "show";
                    document.getElementById("modal-title").innerHTML = `Organic Crowdsourcing<br><small>Credibility Assessment and Critical Thinking through Microtasks while Reading - How to intrinsically motivate readers by personalizing the sequence of microtasks</small>`;
                    
                        document.getElementById("modal-award").innerHTML = "";
                    
                    document.getElementById("modal-extra").innerHTML = `
<div class="extra-links">
    
    
    
    
    
    <a href="https://docs.google.com/presentation/d/1-ThkCnb99jRDb5GaQee6vBDoydss0-77gfS8gAYoJko/edit?usp=sharing" target="_blank">
        <i class="far fa-window-maximize" aria-hidden="true"></i> Slides
    </a>
    
    
    
    <a href="https://github.com/jyoonsong/organic" target="_blank">
        <i class="fab fa-github" aria-hidden="true"></i> Code
    </a>
    
</div>


`;
                    document.getElementById("modal-content").innerHTML = ``;
                    
                    openModal();
                }
        
                document.getElementById("soundglance").onclick = function(e) {
                    if (e.target.tagName == "A")
                        return;

                    document.getElementById("img-soundglance").className = "show";
                    document.getElementById("modal-title").innerHTML = `SoundGlance<br><small>Briefing the glanceable cues of Web pages for screen reader users</small>`;
                    
                        document.getElementById("modal-award").innerHTML = "";
                    
                    document.getElementById("modal-extra").innerHTML = `
<div class="extra-links">
    
    <a href="https://hcil.snu.ac.kr/system/publications/pdfs/000/000/125/original/LBW1821.pdf" target="_blank">
        <i class="far fa-sticky-note" aria-hidden="true"></i> Paper
    </a>
    
    
    <a href="https://dl.acm.org/doi/abs/10.1145/3290607.3312865" target="_blank">
        <i class="fas fa-link" aria-hidden="true"></i> Link
    </a>
    
    
    
    <a href="https://www.youtube.com/watch?v=_Qml_WqmVFY" target="_blank">
        <i class="fas fa-play" aria-hidden="true"></i> Video
    </a>
    
    
    
    
    <a href="https://github.com/SoundGlance/" target="_blank">
        <i class="fab fa-github" aria-hidden="true"></i> Code
    </a>
    
</div>


`;
                    document.getElementById("modal-content").innerHTML = `<strong>Motivation.</strong> I learned HTML for the first time when I was in high school, and since then I've been participating in a lot of web projects mostly working as a front-end developer. As I got better in web development, <b>web accessibility</b> was one thing I started to care about. Although there was an official accessibility guideline for web developers to comply with, most websites did not follow this guideline in reality. I thought there should be some other way to tackle the problem of web accessibility than just to rely on each developer, which is the initial motivation for SoundGlance project.<br><br> So I and Kiroong started this project with the help of X-corps research institute and Siloam Center for the Blind People. Then, we continued this project while I was working at <a target='_blank' href='https://hcil.snu.ac.kr'>SNU HCI Lab</a>.<br><br> <strong>Abstract.</strong> Screen readers have become a core assistive technology for blind web users to browse web pages. Although screen readers can convey the textual information or structural properties of web pages, they cannot deliver their overall impression. Such a limitation hinders blind web users from obtaining an overview of the website, which non-blind people can do in a short time. As such, we present SoundGlance, a novel application that briefly delivers an auditory summary of web pages. SoundGlance supports the screen reader users by converting the important glanceable cues of the pages into sound. The feasibility of the prototype was examined in a pilot study with fourteen blind people. Several practical insights were derived from the experiment.`;
                    
                    openModal();
                }
        
                document.getElementById("talkingBoogie").onclick = function(e) {
                    if (e.target.tagName == "A")
                        return;

                    document.getElementById("img-talkingBoogie").className = "show";
                    document.getElementById("modal-title").innerHTML = `TalkingBoogie<br><small>Collaborative Mobile AAC System for Non-verbal Children with Developmental Disabilities and Their Caregivers</small>`;
                    
                        document.getElementById("modal-award").innerHTML = `<a class="small black mb-2" href="https://chi2020.acm.org/for-attendees/chi-2020-best-papers-honourable-mentions/">🏆 Won Honorable Mention (top 5%), ACM CHI, May 2020 🏆</small>`
                    
                    document.getElementById("modal-extra").innerHTML = `
<div class="extra-links">
    
    <a href="https://donghoon.io/assets/pdf/chi2020_talkingboogie_paper.pdf" target="_blank">
        <i class="far fa-sticky-note" aria-hidden="true"></i> Paper
    </a>
    
    
    <a href="https://dl.acm.org/citation.cfm?id=3312865/" target="_blank">
        <i class="fas fa-link" aria-hidden="true"></i> Link
    </a>
    
    
    
    
    
    
</div>


`;
                    document.getElementById("modal-content").innerHTML = `We worked like this - <a target='_blank' href='https://drive.google.com/open?id=1bNXBJ5wH5DEvbgjWWix2bAs8GOFqKJmx'>click here to see!</a>`;
                    
                    openModal();
                }
        
                document.getElementById("degrees").onclick = function(e) {
                    if (e.target.tagName == "A")
                        return;

                    document.getElementById("img-degrees").className = "show";
                    document.getElementById("modal-title").innerHTML = `Six Degrees of Jaeyoon Song<br><small>Checking 'six degrees of Kevin Bacon' for my relationships on Facebook</small>`;
                    
                        document.getElementById("modal-award").innerHTML = "";
                    
                    document.getElementById("modal-extra").innerHTML = `
<div class="extra-links">
    
    
    <a href="https://jaeyoon.io/dt4c" target="_blank">
        <i class="fas fa-link" aria-hidden="true"></i> Link
    </a>
    
    
    
    
    
    
</div>


`;
                    document.getElementById("modal-content").innerHTML = `<strong>About.</strong> I collected data of my friends at Facebook, friend lists of those friends, friend lists of those friends of friends, and so on—only up to 6 times. With this data, I found the shortest path within six degrees that starts from my direct friends and comes back to me on Facebook. Also, I collected data of recent closeness by combining the number of mentions each friend is mentioned in my recent SNS notifications with my subjective closeness. My intention was to briefly check the following two things - (1) Does the concept of “six degrees of Kevin Bacon” also apply to my relationships on Facebook? (2) Does the shortest path have any relationship with recent closeness? The answer for the first question was "most of the time," since there were several exceptions. For the second question, the answer was definitely "yes", since there was a high correlation between recent closeness and the degree in the shortest path. I thought that my relationships are relatively distributed, because with the other person’s data, I believe the results might have been much simpler ending up with only two or three degrees.<br><br><strong>How to Read.</strong> Each line coming straight out from the center of the circle represents my direct friend who is one degree away from me. The innermost part of the circle is recent closeness visualized as a line graph. Then, the innermost node refers to the friend of my friend, not my direct friend. So if the number of degrees is 2, the path is ‘my friend - friend’s friend - me’. If the path was found within six degrees, the vertices and edges were colored gray, whereas if not, the vertices and edges were colored blue—the vertices of me myself were colored yellow. The dark blue zone corresponds to an infinite zone implying that the connection didn’t come back to me yet.<br><br><img src='https://66.media.tumblr.com/7c68dfaf932ee05a0e085541a602eec4/tumblr_inline_pjzlchpmns1w8f964_540.gif' width='400'><br><br><strong>Implementation.</strong> For implementation, I used d3.js, which was also introduced in class by Professor Hong. Since d3.js is easily used together with web standards, I made an interactive version—nothing special except for tooltips, export function, and the buttons to check the small multiples—on the web as the photo above.`;
                    
                    openModal();
                }
        
                document.getElementById("suggestbot").onclick = function(e) {
                    if (e.target.tagName == "A")
                        return;

                    document.getElementById("img-suggestbot").className = "show";
                    document.getElementById("modal-title").innerHTML = `SuggestBot<br><small>Crowdsourcing Evidence for Debate using Amazon Mechanical Turk. Project at Kixlab (Dec 2018 - Feb 2019)</small>`;
                    
                        document.getElementById("modal-award").innerHTML = "";
                    
                    document.getElementById("modal-extra").innerHTML = `
<div class="extra-links">
    
    
    
    
    
    
    
    <a href="https://github.com/kixlab/suggestbot-rails" target="_blank">
        <i class="fab fa-github" aria-hidden="true"></i> Code
    </a>
    
</div>


`;
                    document.getElementById("modal-content").innerHTML = ``;
                    
                    openModal();
                }
        
                document.getElementById("solutionChat").onclick = function(e) {
                    if (e.target.tagName == "A")
                        return;

                    document.getElementById("img-solutionChat").className = "show";
                    document.getElementById("modal-title").innerHTML = `SolutionChat<br><small>Real-time Moderator Support for Chat-based Structured Discussion</small>`;
                    
                        document.getElementById("modal-award").innerHTML = "";
                    
                    document.getElementById("modal-extra").innerHTML = `
<div class="extra-links">
    
    <a href="https://kixlab.github.io/website-files/2020/chi2020-SolutionChat-paper.pdf" target="_blank">
        <i class="far fa-sticky-note" aria-hidden="true"></i> Paper
    </a>
    
    
    <a href="https://doi.org/10.1145/3313831.3376609" target="_blank">
        <i class="fas fa-link" aria-hidden="true"></i> Link
    </a>
    
    
    
    <a href="https://www.youtube.com/watch?v=MzUJzGOQXLI" target="_blank">
        <i class="fas fa-play" aria-hidden="true"></i> Video
    </a>
    
    
    <a href="https://docs.google.com/presentation/d/1hf84DHNZ2i3gJ0G8hIX1Kij83QtC-UNFN2v01HyCp-k/edit?usp=sharing" target="_blank">
        <i class="far fa-window-maximize" aria-hidden="true"></i> Slides
    </a>
    
    
    
</div>


`;
                    document.getElementById("modal-content").innerHTML = ``;
                    
                    openModal();
                }
        
                document.getElementById("refugees").onclick = function(e) {
                    if (e.target.tagName == "A")
                        return;

                    document.getElementById("img-refugees").className = "show";
                    document.getElementById("modal-title").innerHTML = `Are Refugees Dangerous?<br><small>What people think, what data say, and what media highlight</small>`;
                    
                        document.getElementById("modal-award").innerHTML = "";
                    
                    document.getElementById("modal-extra").innerHTML = `
<div class="extra-links">
    
    
    <a href="https://jaeyoon.io/dt4c" target="_blank">
        <i class="fas fa-link" aria-hidden="true"></i> Link
    </a>
    
    
    
    
    
    
</div>


`;
                    document.getElementById("modal-content").innerHTML = `The topic of my project was refugees, more specifically the Yemeni Muslim refugees coming to Jeju island in South Korea. To narrow down the scope of the topic, I tried to put emphasis on the question if the refugees are dangerous and likely to be involved in a crime in particular. I didn’t explicitly answer the question, but instead tried to focus more on delivering the data itself so that the reader wouldn’t feel that they are being forced to be on one side. One example is the case of Sweden in which I showed both increasing and decreasing crime rate due to accepting refugees. This implies that the number of refugees have nothing to do with the crime rate, showing neither positive nor negative correlation. <br><br> I spent a lot of time searching for factual data—I even read the German official police report using Google translation in order to keep the objectivity using the rawest data. Because of this, the resulting infographic was less visually engaging, and sometimes even misleading due to wrong usage of visual devices.<br><br>The infographic first points out what the people think about the refugees, which has also been a motivation for this project. Then, it points out how crime rate of refugees or foreigners are not so different from other people, giving example of Germany, Norway, and South Korea. Lastly, it suggests that maybe the reason for the difference between people's perspective and what data really says is partially because of what media highlight.`;
                    
                    openModal();
                }
        
                document.getElementById("muggles").onclick = function(e) {
                    if (e.target.tagName == "A")
                        return;

                    document.getElementById("img-muggles").className = "show";
                    document.getElementById("modal-title").innerHTML = `Magic Spells All Muggles are Jealous of<br><small>Twelve variations of magic spells that appear in Harry Potter series.</small>`;
                    
                        document.getElementById("modal-award").innerHTML = "";
                    
                    document.getElementById("modal-extra").innerHTML = `
<div class="extra-links">
    
    
    <a href="https://jaeyoon.io/dt4c" target="_blank">
        <i class="fas fa-link" aria-hidden="true"></i> Link
    </a>
    
    
    
    
    
    
</div>


`;
                    document.getElementById("modal-content").innerHTML = `When I was young, I used to draw up a list of magic spells whenever I was reading Harry Potter. Some of them were so frequently cited that I remember them even now. Among many spells, as the title implies, I tried to avoid selecting deadly spells such as the three unforgivable curses—Avada Kedavra, for example, kills the target. Instead, selected spells are the ones that are comparatively peaceful and trivial but useful. This also accords with the theme of this assignment—my favorite things—since deadly curses are definitely not my favorite, though the magic itself and Harry Potter series are.<br><br>For more information, please visit <a href='https://jaeyoon.io/dt4c' target='_blank'>website.</a>`;
                    
                    openModal();
                }
        
                document.getElementById("samsung").onclick = function(e) {
                    if (e.target.tagName == "A")
                        return;

                    document.getElementById("img-samsung").className = "show";
                    document.getElementById("modal-title").innerHTML = `Matcha - Watcha for Restaurants<br><small>Restaurant recommendation service for Samsung AI Hackathon</small>`;
                    
                        document.getElementById("modal-award").innerHTML = `<a class="small black mb-2" href="https://research.samsung.com/aichallenge/hackathon">🏆 Won Top Ten Finalist, Samsung Research, Sep 2018 🏆</small>`
                    
                    document.getElementById("modal-extra").innerHTML = `
<div class="extra-links">
    
    
    
    
    
    <a href="https://www.slideshare.net/JyoonSong/music-of-bullshit-likelion-ideathon-2017-184059240" target="_blank">
        <i class="far fa-window-maximize" aria-hidden="true"></i> Slides
    </a>
    
    
    
</div>


`;
                    document.getElementById("modal-content").innerHTML = ``;
                    
                    openModal();
                }
        
                document.getElementById("ravi").onclick = function(e) {
                    if (e.target.tagName == "A")
                        return;

                    document.getElementById("img-ravi").className = "show";
                    document.getElementById("modal-title").innerHTML = `RAVi - Realtime Collaborative Video Chat Summarization<br><small>How to support writing a meeting log while doing a video chat?</small>`;
                    
                        document.getElementById("modal-award").innerHTML = "";
                    
                    document.getElementById("modal-extra").innerHTML = `
<div class="extra-links">
    
    
    <a href="https://github.com/jyoonsong/RAVi" target="_blank">
        <i class="fas fa-link" aria-hidden="true"></i> Link
    </a>
    
    
    
    
    
    
    <a href="https://github.com/jyoonsong/RAVi" target="_blank">
        <i class="fab fa-github" aria-hidden="true"></i> Code
    </a>
    
</div>


`;
                    document.getElementById("modal-content").innerHTML = ``;
                    
                    openModal();
                }
        
                document.getElementById("bigpearl").onclick = function(e) {
                    if (e.target.tagName == "A")
                        return;

                    document.getElementById("img-bigpearl").className = "show";
                    document.getElementById("modal-title").innerHTML = `Founding member of Bigpearl<br><small>I used to be a member of Bigpearl, a startup for influencer ad campaigns</small>`;
                    
                        document.getElementById("modal-award").innerHTML = "";
                    
                    document.getElementById("modal-extra").innerHTML = `
<div class="extra-links">
    
    
    <a href="https://ad.bigpearl.io" target="_blank">
        <i class="fas fa-link" aria-hidden="true"></i> Link
    </a>
    
    
    
    
    
    
</div>


`;
                    document.getElementById("modal-content").innerHTML = ``;
                    
                    openModal();
                }
        
                document.getElementById("history").onclick = function(e) {
                    if (e.target.tagName == "A")
                        return;

                    document.getElementById("img-history").className = "show";
                    document.getElementById("modal-title").innerHTML = `Visualizing Korean Independence Movement<br><small>HCI team project</small>`;
                    
                        document.getElementById("modal-award").innerHTML = "";
                    
                    document.getElementById("modal-extra").innerHTML = `
<div class="extra-links">
    
    
    <a href="https://jaeyoon.io/infovis" target="_blank">
        <i class="fas fa-link" aria-hidden="true"></i> Link
    </a>
    
    
    
    
    
    
    <a href="https://github.com/jyoonsong/hci-project" target="_blank">
        <i class="fab fa-github" aria-hidden="true"></i> Code
    </a>
    
</div>


`;
                    document.getElementById("modal-content").innerHTML = ``;
                    
                    openModal();
                }
        
                document.getElementById("cube").onclick = function(e) {
                    if (e.target.tagName == "A")
                        return;

                    document.getElementById("img-cube").className = "show";
                    document.getElementById("modal-title").innerHTML = `The Cube<br><small>My previous portfolio website</small>`;
                    
                        document.getElementById("modal-award").innerHTML = "";
                    
                    document.getElementById("modal-extra").innerHTML = `
<div class="extra-links">
    
    
    <a href="https://jaeyoon.io/cube" target="_blank">
        <i class="fas fa-link" aria-hidden="true"></i> Link
    </a>
    
    
    
    
    
    
</div>


`;
                    document.getElementById("modal-content").innerHTML = `I love cubes (i.e., regular hexahedrons). Why? There is no special reason. You know, they're just interesting, stable, and beautiful.<br><br> I do know that placing navigation links on a cube that is incessantly rotating does not really provide an optimal user experience, which is why I created this new ''ordinary'' version of portfolio website. The cube version was more targeted for <i>expressing</i> myself as an enthusiast in web development and design. I wanted to place something non-typical and cool in the middle of my website.<br><br>I started this project as an assignment at 'Interactive Web Development' class taught by <a href='https://viterbi.usc.edu/directory/faculty/Kim/Nayeon' target='_blank'>Prof. Nayeon Kim</a> at the University of Southern California. I was an exchange student there, and I got the top score for the final project (300/300) with this website. I also got A as my final grade, the highest grade in the grading system at USC.`;
                    
                    openModal();
                }
        
                document.getElementById("chartmetric").onclick = function(e) {
                    if (e.target.tagName == "A")
                        return;

                    document.getElementById("img-chartmetric").className = "show";
                    document.getElementById("modal-title").innerHTML = `Intern at Chartmetric<br><small>Short-term intern for front-end development</small>`;
                    
                        document.getElementById("modal-award").innerHTML = "";
                    
                    document.getElementById("modal-extra").innerHTML = `
<div class="extra-links">
    
    
    <a href="https://chartmetric.io" target="_blank">
        <i class="fas fa-link" aria-hidden="true"></i> Link
    </a>
    
    
    
    
    
    
</div>


`;
                    document.getElementById("modal-content").innerHTML = `Chartmetric is a self-service tool that features a beautifully designed dashboard that combines hundreds of thousands of real-time data points across multiple music platforms (e.g., Spotify, iTunes). <br><br> In 2017 fall semester, I went to University of Southern California (USC) as an exchange student. Visiting Sungmoon Cho, who is the CEO of Chartmetric, I eventually became a short-term intern working on the front-end part of the system and visualizing the data.`;
                    
                    openModal();
                }
        
                document.getElementById("music").onclick = function(e) {
                    if (e.target.tagName == "A")
                        return;

                    document.getElementById("img-music").className = "show";
                    document.getElementById("modal-title").innerHTML = `Music of Bullshit (아무말음악잔치)<br><small>Any sound can become a piece of music! A platform where users can collaboratively compose with any kind of nonsense sound</small>`;
                    
                        document.getElementById("modal-award").innerHTML = `<a class="small black mb-2" href="https://www.hangyo.com/news/article.html?no=85459">🏆 Won Top Ten Winner ($1,000 AWS Credits), Likelion (supported by AWS Korea), Jul 2017 🏆</small>`
                    
                    document.getElementById("modal-extra").innerHTML = `
<div class="extra-links">
    
    
    
    
    
    <a href="https://www.slideshare.net/JyoonSong/music-of-bullshit-likelion-ideathon-2017-184059240" target="_blank">
        <i class="far fa-window-maximize" aria-hidden="true"></i> Slides
    </a>
    
    
    
</div>


`;
                    document.getElementById("modal-content").innerHTML = ``;
                    
                    openModal();
                }
        
                document.getElementById("shashagungun").onclick = function(e) {
                    if (e.target.tagName == "A")
                        return;

                    document.getElementById("img-shashagungun").className = "show";
                    document.getElementById("modal-title").innerHTML = `Shashagungun (샤샤건건)<br><small>Web Platform to gather posters of various events in Seoul National University</small>`;
                    
                        document.getElementById("modal-award").innerHTML = `<a class="small black mb-2" href="https://snulife.com/sandbox/106346747">🏆 Won Winner (1st), SNULife School Service Development Tournament, Feb 2017 🏆</small>`
                    
                    document.getElementById("modal-extra").innerHTML = `
<div class="extra-links">
    
    
    <a href="https://shashagungun.com" target="_blank">
        <i class="fas fa-link" aria-hidden="true"></i> Link
    </a>
    
    
    
    
    
    
</div>


`;
                    document.getElementById("modal-content").innerHTML = `<strong>Introduction.</strong> Shashagungun is a platform for Seoul National University (SNU) students to share posters about school events such as market, daily pub, competitions, seminars, exhibitions, and so on. It was implemented by me and other 5 people, who were all members of a web programming club called <a target='_blank' href='https://snu.likelion.net'>Likelion</a>. We won <b>first place at a competition for developing a school-related service</b> held by <a target='_blank' href='https://snulife.com'>SNULife</a>, which is a web-based community for SNU students. Shashagungun is a coined term derived from Korean idiom 'Sasagungun (사사건건)' combined with 'Sha (샤)' that is symbolic of SNU.<br><br><strong>Motivation.</strong> My idea about Shashagungun started a long time ago. I used to design numerous posters, but as time passed, I felt bad about my posters stuck useless in my laptop -- not only mine, but many other high-quality posters lasting only for a short period and then thrown out to bin. <br><br> Furthermore, this was tragedy for not only the designers, but also students in general. Information on school events, particularly the unofficial ones held by students, was so unorganized that students often were confused or never found out the events. Something had to be done to get the posters organized in a single space. <br><br> So these are why I came up with the idea of bringing the posters online to create an online platform where (1) students can easily search and obtain information on school events, and (2) at the same time designers can preserve their precious efforts on the posters.`;
                    
                    openModal();
                }
        
                document.getElementById("oss").onclick = function(e) {
                    if (e.target.tagName == "A")
                        return;

                    document.getElementById("img-oss").className = "show";
                    document.getElementById("modal-title").innerHTML = `OSS Efficiency<br><small>What Is Needed for the Sustainable Success of Open Source Software Projects?</small>`;
                    
                        document.getElementById("modal-award").innerHTML = `<a class="small black mb-2" href="https://www.hangyo.com/news/article.html?no=85459">🏆 Won Grand Prize (1st), Undergraduate Research Presentation Competition, Korean Production & Operations Management Society, May 2018 🏆</small>`
                    
                    document.getElementById("modal-extra").innerHTML = `
<div class="extra-links">
    
    <a href="https://www.mdpi.com/2071-1050/10/9/3001" target="_blank">
        <i class="far fa-sticky-note" aria-hidden="true"></i> Paper
    </a>
    
    
    
    
    
    <a href="https://www.slideshare.net/JyoonSong/what-is-needed-for-the-sustainable-success-of-open-source-software-projects-efficiency-analysis-of-commit-production-process-via-git-171519211" target="_blank">
        <i class="far fa-window-maximize" aria-hidden="true"></i> Slides
    </a>
    
    
    
    <a href="https://github.com/jyoonsong/oss-efficiency" target="_blank">
        <i class="fab fa-github" aria-hidden="true"></i> Code
    </a>
    
</div>


`;
                    document.getElementById("modal-content").innerHTML = `I started this project when I was <b>freshman</b> at college. I took a course titled 'Operations Management' taught by Professor Changhee Kim, where I did this project as a class assignment. Then, I took another class called 'Management Science' also taught by Prof. Kim. There, I worked more on the project and almost completed it. So this project was in fact already finished when I was a sophomore. <br><br>Next year, when I became a junior, I won first prize at a competition held by Korean Production and Operations Management Society (KOPOMS) where I gave a talk about this project. Soon Prof. Kim recommended to me submitting the completed work to a journal called Sustainability. That's how this work got published. However, since I had no time at the moment, I just <b>hired an expert to translate my manuscript</b>. Now that I look more into it, translation is kind of bad. Please keep in mind that the I only wrote the Korean version.<br><br>The paper is about 'what is needed for open source software projects to be efficient?'. Existing literature and common wisdom including Linus' Law celebrate the 'many eyeballs' as the key advantage of open source projects. Nevertheless, when it comes to efficiency, <b>'many eyeballs' could be a double-bladed sword.</b> By mining and analyzing the data collected from GitHub open source projects, this paper provides several implications for the efficiency of open source projects.`;
                    
                    openModal();
                }
        
    }



}