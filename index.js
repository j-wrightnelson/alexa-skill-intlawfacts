'use strict';
var Alexa = require('alexa-sdk');

//=========================================================================================================================================
//TODO: The items below this comment need your attention.
//=========================================================================================================================================

//Replace with your app ID (OPTIONAL).  You can find this value at the top of your skill's page on http://developer.amazon.com.
//Make sure to enclose your value in quotes, like this: var APP_ID = "amzn1.ask.skill.bb4045e6-b3e8-4133-b650-72923c5980f1";
var APP_ID = "amzn1.ask.skill.36812d84-375c-4375-9774-028dcd6a3c99";

var SKILL_NAME = "International Law Facts";
var GET_FACT_MESSAGE = "Here's your international law fact,: ";
var HELP_MESSAGE = "You can say tell me a international law fact, or, you can say exit... What can I help you with?";
var HELP_REPROMPT = "Say tell me a international law fact, or say exit";
var STOP_MESSAGE = "Goodbye!";

//=========================================================================================================================================
//TODO: Replace this data with your own.  You can find translations of this data at http://github.com/alexa/skill-sample-node-js-fact/data
//=========================================================================================================================================
var data = [
    "Despite its name, the Permanent Court of Arbitration is not a court, nor is it permanent.  Rather, it is an intergovernmental organization that provides a variety of dispute resolution services to the international community. It was established in 1899, following the Hague Peace Conference that had been convened by Czar Nicholas the Second of Russia.",
    "An interesting coincidence. ,The United Kingdom was a party to the Permanent Court of International Justice's first reported judgment, in the case concerning the S.S. Wimbledon, in 1923, and the International Court of Justice's first reported judgment, in the case concerning the Corfu Channel, in 1949. In both cases, the United Kingdom was the applicant.",
    "Covering *almost* the entire planet, there are now 193 members states in the United Nations. South Sudan is the U.N.'s newest member, having been admitted in 2011. There are also two non-member, permanent observers. The first is the Holy See, and the second is the State of Palestine. Switzerland is the most recent country to have transitioned from being an observer to being a member, having made the change in 2002 - after spending 56 years as an observer.",
    "The Charter of the United Nations was signed on the 26th of June, 1945, by the representatives of fifty States, assembled at the San Francisco War Memorial and Performing Arts Center. The Charter entered into force on the 24th of October, 1945, following ratification by the original five permanent members of the Security Council.",
    "The Charter of the United Nations sets out the pre-eminent international legal obligations of every member of the United Nations. Article one hundred and three of the Charter provides that, in the event of a conflict between the obligations of a Member of the United Nations under the Charter, and their obligations under any other international agreement, the Member's obligations under the Charter will prevail.",
    "A State's national law cannot serve as the justification for a breach of international law. This general principle is expressed in two seperate international legal instruments. First, article 27 of the Vienna Convention on the Law of Treaties prevents a state from invoking the provisions of its internal law as justification for its failure to perform a treaty. Second, Articles three and thirty-two of the Articles on the Responsibility of States for Internationally Wrongful Acts prohibit a state from pleading their internal law as an excuse for an international wrong.",
    "The Vienna Convention on the Law of Treaties was signed by over twenty states when it was opened for signature on the 23rd of May, 1969, but did not enter into force until the 27th of January, 1980. The International Court of Justice has on numerous occasions referred to the Convention's articles as representing customary international law, and has tended to apply the Convention even to states that are not parties to it.",
    "The United Nations Committee on the Peaceful Uses of Outer Space is the pre-eminent forum for the development of international space law. The Committee first met in 1958, following the launch of the first artificial Earth satellite, Sputnik-1, the previous year. The Committee has concluded five international treaties, and five sets of principles on space-related activities. Each of these instruments emphasises the notion that outer space, the activities carried out in outer space, and whatever benefits might be accrued from outer space, should be devoted to enhancing the well-being of all States, and of humankind.",
    "The International Civil Aviation Organization is a specialized organization of the United Nations, that is headquartered in Montreal, Canada. The Organization establishes the principles and techniques of international air navigation and fosters the planning and development of international air transport, to ensure safe and orderly growth.",
    "The Central Commission for the Navigation of the Rhine is the oldest continutally operating international organization. The Commission is constituted pursuant to agreements made at the Congress of Vienna in eighteen fifteen, in the aftermath of the Napoleonic Wars. The current member states are Germany, Belgium, France, The Netherlands, and Switzerland.",
    "States are the central actors in international law. Yet there is no clear definition of what exactly constitutes a state. One definition that has gained relatively widespread acceptance is that set out in Article 1 of the Montevideo Convention on the Rights and Duties of States. Article 1 says that states should possess four attributes. First, a permanent population; second, a defined territory; third, a government; and fourth, the capacity to enter in to relations with other states.",
    "The Dutch East India Company, established in 1602, was the world's first multi-national corporation. It was endowed by the Netherlands with quasi-governmental powers, including the power to declare wars, negotiate treaties, and establish colonies. Similar companies established by England, Denmark, France and Germany were the key instruments of colonial expansion in the 17th, 18th and 19th centuries. These colonial companies were eventually nationalized, with their territories becoming formal colonies of their respective states.",
    "The last European colony in Asia was Macau, which became a Special Administrative Region of the People's Republic of China at midnight on the 20th of December, 1999. Like Hong Kong, a former British colony that was returned to China in 1997, Macau retains a high level of autonomy that is unique for a sub-state entity, including the retention of its own distinct legal system, currency and immigration controls.",
    "War as an instrument of foreign policy was first outlawed in the Kellogg-Briand Pact of 1928. This prohibition carried over to the Charter of the United Nations, under which the use of force is prohibited. However, there are two circumstances in which the proportionate use of force will not breach international law. First, in the case of collective or individual self-defense against an actual - or imminent - armed attack. Second, when the Security Council has directed or authorized use of force to maintain or restore international peace and security, such as in the case of the Korean War, and the First Gulf War.",
    "States occasionally adopt public expressions of intention in the form of doctrines. Doctrines can be distinguished from the statements that States make on a day-to-day basis on the grounds of intent: most notably, a doctrine is intended by the State expressing it to have legal consequences for other States. The exact legal effect of a doctrine remains, however, an open question.",
    "The International Court of Justice acts as a world court - and is often referred to by this name. The Court has a dual jurisdiction. First, it decides, in accordance with international law, disputes of a legal nature that are submitted to it by States. Second, it gives advisory opinions on legal questions at the request of the organs of the United Nations, or at the request of the United Nation's specialized agencies. This jurisdiction is referred to as the Court's advisory jurisdiction.",
    "The International Court of Justice cannot compel states to appear before it. Rather, States must give their express consent to the Court's jurisdiction. This is done in one of three ways. First, a State may make a general declaration accepting the Court's jurisdiction. Second, a State may sign a treaty that provides for dispute resolution by the Court in respect of that treaty. Third, a State may give its consent to the Court in respect of a particular case. When the Court was established, it was expected that most States would make general declarations accepting the Court's jurisdiction. However, as of 2017, only 72 States have made such declarations - and, of the five permanent members of the Security Council, only the United Kingdom presently accepts the Court's jurisdiction in this manner.",
    "The Hague Academy of International Law is a center for high-level education in both public and private international law. The Academy was founded in 1914, with inaugration set for October 1914. However, the outbreak of the First World War in July 1914 meant that the Academy did not launch until 1923, with its first class of 353 students commencing on the 14th July, 1923. The Academy has been nominated for the Nobel Peace Prize 38 times, but has never won, with the Academy's most recent nomination being in 1956.",
    "The Peace Palace, located in The Hague, houses four key institutions of international law, all within the one building. Initially built in the early 1900s to accomodate the Permanent Court of Arbitration, and the Peace Palace Library, the Peace Palace today houses both these institutions, as well as the International Court of Justice, and the Hague Academy of International Law. Many other international courts, such as the Iran-United States Claims Tribunal; the International Criminal Tribunal for the former Yugoslavia; the International Criminal Court; and the Mechanism for International Criminal Tribunals, are also located in The Hague, making the city the pre-eminent center of international law."
];

//=========================================================================================================================================
//Editing anything below this line might break your skill.
//=========================================================================================================================================
exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetNewFactIntent');
    },
    'GetNewFactIntent': function () {
        var factArr = data;
        var factIndex = Math.floor(Math.random() * factArr.length);
        var randomFact = factArr[factIndex];
        var speechOutput = GET_FACT_MESSAGE + randomFact;
        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = HELP_MESSAGE;
        var reprompt = HELP_REPROMPT;
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    }
};