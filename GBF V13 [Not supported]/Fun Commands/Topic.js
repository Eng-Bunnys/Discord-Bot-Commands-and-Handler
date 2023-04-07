                topic: {
                    description: "Gives a random question",
                    execute: async ({
                        client,
                        interaction
                    }) => {
                        let topicQ = ['What are the top three things on your bucket list?', 'How do you think you will die?', 'If you could ask for a miracle, what would it be?', 'What is the biggest risk you’ve ever taken?', 'What would your ideal life look like?', 'If someone gave you an envelope with your death date inside of it, would you open it?', 'When have you been the most happy?', 'What is your idea of the perfect day?', 'Do you think your priorities have changed since you were younger?', 'What keeps you up at night?', 'What scares you most about your future?', 'What is the most difficult thing you’ve ever done?', 'What does success mean to you?', 'What makes you smile?', 'Is there a dream you’ve always had?', 'What gives you butterflies?', 'What motivates you most in life?', 'What makes you feel discouraged?', 'What’s something not many people know about you?', 'What are you most passionate about?', 'Who do you text the most?', 'What was your favorite thing to do as a kid?', 'What’s your dream job?', 'What is your favorite weekend activity?', 'What makes you most uncomfortable about dating?', 'If you could have dinner with anyone living or not, who would it be?', 'Are you a cat person or a dog person?', 'What is the silliest thing you’ve posted online?', 'What was your worst wardrobe mistake?', 'What is the best restaurant you’ve been to?', 'What is your favorite kitchen smell?', 'When you die, what do you want to be reincarnated as?', 'What is your favorite guilty pleasure TV show?', 'Who would you swap lives with for a day?', 'If you could live anywhere in the world, where would it be?', 'Would you prefer to live in an urban area or a rural area?', 'What is the strangest gift you have ever received?', 'What’s the best compliment you’ve ever received?', 'Would you rather be invisible or have X-ray vision?', 'If you could only save one item from a house fire, what would it be?', `You're house is on fire and you can only save one person do you: save your mom,dad or do you let both of them die?`, 'If you could have picked your own name, what would it be?', 'What time period would you travel to?', 'What is one thing you can’t live without?', 'What is your least favorite chore?', 'Who are you most thankful for and why?', 'What makes you most proud?', 'What makes you the happiest?', 'Who makes you the happiest?', 'If you could be an animal, what would it be and why?', 'If you could be any age, what age would you choose?', 'When is the last time you laughed so hard that you cried?', 'What did you think was the most challenging part of being a kid?', 'If you could be any age, what age would you choose?', 'What are you reading right now?', 'How long can you go without checking your phone?', 'Do you have a morning ritual?', 'What bad habits do you wish you could stop?', 'Are you a jealous person?', 'If someone offered to tell you your future, would you accept it?', 'If you were to remove one social media app from your phone, which would it be and why?', 'If you were on death row, what would your last meal be?', 'If you could sit down with your 13-year old self, what would you say?', 'What makes you really angry?', 'What’s your guilty pleasure?', 'What bores you?', 'If your plane was going down, who would you would call?', 'What would you do if you were home alone and the power went out?', 'What do you do in your free time?', 'What do you wish you had more time for?', 'What is your favorite movie soundtrack?']
                        const response = topicQ[Math.floor(Math.random() * topicQ.length)]

                        const topicEmbed = new MessageEmbed()
                            .setTitle("<:BlueThinking:825400207344140298> Random Topic:")
                            .addFields({
                                name: '━━━━━━━━━',
                                value: (response)
                            })
                            .setColor("#00FFFF")
                            .setFooter({
                                text: `Requested by ${interaction.user.username}`,
                                iconURL: interaction.user.displayAvatarURL()
                            })
                            .setThumbnail('https://cdn.discordapp.com/attachments/791309678092353536/822294803504562206/speech_ballon.gif')

                        return interaction.reply({
                            embeds: [topicEmbed]
                        })
                    }
                }
