# Point Reyes HQ: casting sheet

One portrait per agent (square, 1:1, for the round face in HQ), then a 5s candid loop where credits allow.
Image: Higgsfield Soul (photoreal). Use **Soul ID** for the CEO, and save each new face as its own Soul character after the first pick so every later shot stays consistent.
Loop: Kling or Seedance, image-to-video from the approved portrait.

**Shared style (append to every portrait prompt):**
editorial-grade candid photo of a strikingly good-looking person, flattering natural light on the face, fly-on-the-wall, subject absorbed in their own work, never looking at camera, three-quarter profile, inside a warm organic plaster-and-walnut headquarters in the Jamaican rainforest (Portland Parish), soft window light from jungle greenery, 50mm lens, f/2, shallow depth of field, Kodak Portra 400 color, subtle grain, sharp New York style: tailored layers, a little vintage, not corporate, not costume

**Negative (every shot):** looking at camera, posed smile, text, logos, watermarks, brand marks on clothing, warped hands, extra fingers, plastic skin, oversaturation, corporate suit and tie, costume

**Loop prompt (every agent):** subject keeps working, small natural movement (turns a page / scrubs a timeline / types), slow 5% push-in, locked-off feel, leaves move outside the window, no cut, no camera look

| Agent (id) | Room | Portrait prompt (plus shared style) |
|---|---|---|
| CEO (`ceo`) | CEO's Office | **Soul ID: Michael.** Michael at the head of a long walnut table, phone in one hand, reading a cut on a large glass screen, charcoal overshirt over a black tee |
| Producer (`producer`) | Producer's Desk | Strikingly beautiful Afro-Latina woman in her 50s, silver curls tied up, camel overcoat over a black turtleneck, vintage gold watch, marking up a paper call sheet with a pencil |
| HT Shorts factory (`newsroom`) | Newsroom | Handsome Black man in his 30s, cropped fade, oversized vintage basketball warm-up jacket, high-top sneakers, headphones around his neck, scrubbing a timeline on two monitors |
| Analytics desk (`marketing`) | Marketing | Beautiful South Asian woman in her 20s, long dark hair in a low knot, cropped varsity jacket, wide-leg trousers, grey runners, reading charts across two monitors |
| newsXculture chief of staff (`nxc-chief`) | Marketing | Handsome Black man in his 40s, salt-and-pepper beard, tailored navy chore coat, white tee, suede desert boots, reading a printed brief with a coffee |
| newsXculture TikTok (`nxc-tiktok`) | Marketing | Beautiful Dominican woman in her 20s, short natural curls, thrifted leather blazer, cargo pants, trail sneakers, filming vertical on a phone gimbal |
| newsXculture brand & site (`nxc-brand`) | Marketing | Handsome Korean-American man in his 30s, round tortoiseshell glasses, cream fisherman sweater, pleated trousers, loafers, arranging prints on a mood board |
| We Are California editor (`edit-bay`) | Edit Bay | Beautiful Black woman in her 40s, shaved head, gold hoops, black utility jumpsuit, vintage runners, color grading in a dark bay, face lit by the grade monitor |
| Bear Trip writer (`bear-trip`) | Writers' Room | Distinguished Black man in his 60s, white beard, flat cap, corduroy blazer, worn leather work boots, moving index cards on a table |
| Night Fares showrunner (`night-fares`) | Writers' Room | Beautiful Afro-Brazilian woman in her 30s, long box braids, oversized vintage leather trench, black jeans, Chelsea boots, pinning character boards to a wall |
| Miles of Love producer (`miles-of-love`) | Writers' Room | Handsome mixed-race (Black and Filipino) man in his 20s, twists, knit beanie, olive overshirt over a hoodie, canvas sneakers, watching a cut on a laptop, headphones on |
| The Lookout (`business`) | Lookout | Beautiful Mexican-American woman in her 30s, sleek low bun, double-breasted pinstripe blazer, vintage straight-leg jeans, loafers, on the phone at a tall window, notebook open |

**Writers' Room plate (16:9, 1792x1008):** wide establishing shot of a writers' room inside the same organic curved-plaster headquarters in the Jamaican rainforest, long reclaimed-walnut table covered in index cards and scripts, a cork wall of character boards and story beats, warm practical lamps, rain on floor-to-ceiling glass with jungle beyond, nobody in frame, 24mm lens, golden late-afternoon light, cinematic, photoreal. Same negative prompt.

Where each result goes: the image URL goes in `agents["<id>"].avatar` in the HQ feed. Use a host that stays reachable, such as Higgsfield's own CDN link or the HQ site's `/img/crew/` folder on the next deploy.
