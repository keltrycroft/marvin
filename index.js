const express = require('express');
const { appendFile } = require('fs');
const PORT = process.env.PORT || 5000;

var textOptions = [
    "That won't scale.",
    "That's been proven to be O(N^2) and we need a solution that's O(NlogN).",
    "The syntax is idiosyncratic.",
    "Trying to build a team behind that technology would be a staffing nightmare.",
    "That can't be generalized to a cross-platform build.",
    "Unfortunately, the license would contaminate our product.",
    "Our support infrastructure simply can't handle the volume that change would involve.",
    "I had one of the interns try that approach for another project, and it scrambled the CEO's hard drive. So I think it's going to be a hard sell.",
    "Yes, well, that's just not the way things work in the real world.",
    "I like your idea. Why don't you write up a white paper and we'll review it at the next staff meeting?",
    "I think you need to stop taking this so personally. We need to think about what's best for the project, not about our own little pet theories.",
    "Oh, I played with that approach back as an undergrad.",
    "I was reading about that on Hacker News yesterday too.",
    "That's totally inefficient on modern hardware.",
    "Well, yes, but it really reduces to the knapsack problem in that case. Do you have some kind of heuristic, or are we dealing with an NP-complete case?",
    "Have you LOOKED at the number of I/O requests that will create?",
    "We can't afford the transaction overhead.",
    "No, no, no. It's fairly important that the database be in THIRD NORMAL FORM.",
    "No, that would break object encapsulation.",
    "Can you generate some USE CASES that would justify the change?",
    "How is that going to impact the schedule?",
    "It would probably be best if we deferred that until our next major version.",
    "If you make this change, I will fork the code.",
    "Yes, well, unfortunately the economy is going away from anything remotely like that. Our investors would kill us.",
    "You used to program in Pascal, didn't you?",
    "You've obviously ignored the various namespace issues.",
    "I don't think you're considering the performance trade-offs.",
    "What kind of benchmarks have you been running?",
    "Let's table this for now, and we'll talk about it one-on-one off-line.",
    "This really doesn't jibe with our core competency.",
    "This sort of thing should really be outsourced.",
    "Yes, but can this be embedded in a toaster, for example?",
    "We need something that my mom can use.",
    "Users won't want to click through that many layers of hierarchy.",
    "OK, but what about internationalization?",
    "Can you talk serious design with us?",
    "That's a good idea -- you should do that on your home page.",
    "That's great, but I thought that whole idea was discredited years ago.",
    "What you're not seeing is the difference between an 'is-a' and a 'has-a' relationship.",
    "Well, that's great if you have an AI running the thing. But if you're not, then you're not doing it right.",
    "That's a good idea, but I think it's going to be a long-term maintenance nightmare.",
    "I think you're doing a good job of thinking about the problem, but you're not thinking about the solution.",

]

express()
    .get('/', (req, res) => res.send(textOptions[Math.floor(Math.random() * textOptions.length)]))
    .post('/', (req, res) => res.send({response_type: "in_channel", text: textOptions[Math.floor(Math.random() * textOptions.length)]}))
    .listen(PORT, () => console.log(`Listening on ${ PORT }`));


