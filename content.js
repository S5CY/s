/* Original practice questions. Vocabulary transcribed from the supplied 2023–2025 screenshots. */
const TOPICS = [
 ['boundaries','english','Sentence boundaries','Two complete sentences need a period, semicolon, or comma + coordinating conjunction.','A comma alone cannot join two independent clauses.','完整句之间不能只用逗号。','Using a comma where a period belongs.'],
 ['essential','english','Essential & relative clauses','Essential information identifies which noun: no commas. Nonessential information adds a removable detail: use a matched pair of commas or dashes.','On the SAT, restrictive “that” clauses are not set off with commas.','限定性 that 从句不加逗号。','Putting commas around an essential “that” clause.'],
 ['tense','english','Tense & scientific definitions','Use simple present for general truths and scientific definitions. Use context to decide whether an event happened in the past or continues into the present.','A definition is not automatically present perfect.','科学定义通常用一般现在时。','Choosing “has described” for a general definition.'],
 ['verbs','english','Finite verbs & participles','Find the main subject and its finite verb first. A participial phrase uses a nonfinite form such as -ing or -ed; it does not create another main clause.','One clause cannot contain two unconnected finite predicates.','先找主句谓语，再判断是否需要分词。','Adding a conjugated verb when a main verb is already present.'],
 ['clauses','english','Independent & dependent clauses','Independent = subject + finite verb + complete thought. Words such as although, because, and while can make a clause dependent.','Although the experiment failed = dependent. The team learned = independent.','从属连词会使完整句变为从句。','Treating a dependent clause as a complete sentence.'],
 ['punctuation','english','Colons, semicolons & dashes','A colon must follow a complete clause and introduces an explanation, example, or list. A semicolon joins related complete clauses. Paired dashes enclose an interruption.','What comes after a colon may be a fragment; what comes before must stand alone.','冒号前必须是完整句。','Placing a colon between a verb and its object.'],
 ['agreement','english','Subject–verb agreement','Ignore interrupting phrases. Match the verb to the grammatical subject, not the closest noun.','The collection of rare maps IS valuable.','谓语与真正的主语一致。','Matching the verb to a noun inside an “of” phrase.'],
 ['modifiers','english','Participles & dangling modifiers','The noun immediately following an introductory modifier must be the person or thing doing the action.','Walking through the museum, Lina noticed the sculpture.','开头修饰语的动作执行者应紧接其后。','Making a building perform a human action.'],
 ['parallel','english','Parallel structure','Items in a series and parts joined by paired conjunctions should share a grammatical pattern.','Mapping, measuring, and recording — all -ing forms.','并列成分语法形式一致。','Mixing an infinitive with two gerunds.'],
 ['pronouns','english','Pronouns & possessives','A pronoun needs a clear antecedent and matching number. Its = possessive; it’s = it is. Singular owner: scientist’s. Plural owners: scientists’.','First decide whether the word indicates possession or a contraction.','先判断所属关系，再判断单复数。','Confusing a plural noun with a plural possessive.'],
 ['appositives','english','Appositives & complex lists','An appositive renames a noun. Enclose a nonessential appositive with matching punctuation. Use semicolons to separate list items that already contain commas.','Three teams: Lima, Peru; Quito, Ecuador; and Bogotá, Colombia.','列表项内部有逗号时，可用分号分隔各项。','Breaking a matched pair of punctuation marks.'],
 ['transitions','english','Transitions: logic before labels','Predict the relationship before reading the choices: addition, contrast, concession, cause/effect, example, clarification, sequence, simultaneity, purpose, or conclusion.','A contrasting outcome is not automatically a cause-and-effect relationship.','先判断逻辑关系，再选连接词。','Choosing a familiar word without checking the relationship.'],
 ['evidence','english','Evidence & scientific logic','Reduce the claim to A → B. Ask which observation specifically supports or weakens that link. Keep direction, comparison group, and qualifiers intact.','No evidence for a claim ≠ evidence that the claim is false.','缺乏证据不等于证明错误。','Choosing a true fact that does not support the actual claim.'],
 ['inference','english','Inferences & main ideas','Choose the smallest conclusion supported by the text. Preserve words such as some, may, only, and under these conditions.','Do not upgrade “may” to “always.”','推断不能超出原文证据。','Picking a reasonable answer that adds an assumption.'],
 ['cross-text','english','Cross-text & author arguments','Summarize each text in one line: claim + reason + limitation. Compare what the authors actually assert, not merely their shared topic.','Same topic does not mean agreement.','比较观点，不只是比较话题。','Mistaking a shared subject for the same argument.'],
 ['quantitative','english','Quantitative evidence','Name the variables, direction, and comparison. Check units and whether a value is a count, proportion, or rate.','More total events can still mean a lower rate.','分清总量、比例和变化率。','Reversing which variable predicts the other.'],
 ['quadratics','math','Quadratics & unknown constants','Vertex: a(x − h)² + k. Vertex x = −b/(2a). Discriminant: b² − 4ac. Exactly one distinct real root means discriminant = 0.','For a > 0, k is the minimum; for a < 0, k is the maximum.','开口向上时顶点为最小值。','Reading the constant in standard form as the minimum.'],
 ['polynomials','math','Polynomial coefficients from roots','For monic x³ + ax² + bx + c with roots r, s, t:\na = −(r+s+t)\nb = rs+rt+st\nc = −rst','Expand (x−r)(x−s)(x−t), or use Vieta directly.','二次项系数是根之和的相反数。','Confusing the x² coefficient with the product of roots.'],
 ['geometry','math','3D geometry & scaling','Square pyramid: ℓ² = h² + (s/2)²; lateral area = 2sℓ; total area = s² + 2sℓ; volume = s²h/3.','s = base side; h = vertical height; ℓ = face slant height. Scale lengths by k, areas by k², volumes by k³.','底边长、垂直高、斜高是不同量。','Using the base side as the vertical height.'],
 ['rational','math','Rational equations & valid roots','Record forbidden denominator values first. Clear denominators, solve the resulting equation, then reject forbidden candidates.','Exactly one valid solution can arise from two algebraic roots when one is forbidden.','先写定义域，最后检验增根。','Using discriminant = 0 without checking excluded values.'],
 ['exponents','math','Exponential & percent change','Growth: A(1+r)^t. Decay: A(1−r)^t. Successive percent changes multiply.','A 20% increase then a 20% decrease gives 1.2 × 0.8 = 0.96 of the original.','连续百分比变化要相乘。','Adding percent changes instead of multiplying factors.'],
 ['functions','math','Transformations & systems','f(x−h)+k shifts right h and up k. Parallel lines share slope; perpendicular slopes multiply to −1 when both slopes exist.','For systems, compare coefficient ratios: same line, parallel lines, or one intersection.','函数内部平移方向与符号相反。','Treating f(x−3) as a shift left.'],
 ['triangles','math','Triangles, trig & circles','30–60–90 sides: 1:√3:2. 45–45–90: 1:1:√2. sin θ = opposite/hypotenuse. cos θ = adjacent/hypotenuse. Circle: (x−h)²+(y−k)²=r².','Similar lengths scale by k; areas by k². Complete the square to recover a circle’s center.','圆的一般式需要配方后读圆心与半径。','Reading r² as the radius.'],
 ['units','math','Units & Desmos checks','Carry units through each multiplication. For area or volume, square or cube the conversion factor. In Desmos, graph both sides or graph their difference.','Use a table or intersection to check a candidate; always preserve domain restrictions.','面积单位换算要平方，体积要立方。','Converting square units with a linear factor.']
].map(([id,section,title,rule,shortcut,zh,trap])=>({id,section,title,rule,shortcut,zh,trap}));
const TRANSITIONS={Addition:'Moreover; furthermore; additionally',Contrast:'Conversely; by contrast; however',Concession:'Granted; nevertheless; even so', 'Cause and effect':'Accordingly; therefore; consequently',Examples:'For example; for instance; specifically',Clarification:'In other words; that is', 'Chronological order':'Subsequently; previously; then', 'Simultaneous events':'Concurrently; meanwhile; simultaneously',Purpose:'To this end; for this purpose',Conclusions:'In summary; overall; to conclude'};
// word | Chinese | English. Source year denotes the supplied sheet, not an official SAT endorsement.
const VOCAB_RAW={
2023:`affinity|密切关系；喜爱|a natural connection or liking
antagonistic|对抗的|actively opposed or hostile
buttress|支持|to strengthen or support
conspicuous|明显的|easy to notice
constrict|收紧；限制|to tighten or restrict
convene|召集|to gather for a meeting
corroborate|证实|to confirm with additional evidence
disguise|掩饰|to conceal the identity or nature of
eclipse|使黯然失色|to overshadow in importance
emulate|模仿|to imitate with the aim of matching
exactitude|精确|the quality of being precise
extrapolate|推断|to extend a pattern beyond known data
inconspicuous|不显眼的|not easily noticed
ineligible|不合资格的|not qualified to participate
manifest|明显的；表明|clearly evident; to show
mitigate|减轻|to make less severe
observe|观察；遵守|to notice carefully; to follow a rule
partition|分隔|to divide into parts
precariousness|不稳定|a state of insecurity or instability
precede|在之前|to come before
preclude|阻止；排除|to prevent or make impossible
prevail over|战胜|to succeed against
prestige|声望|respect based on achievement
pristine|原始的；纯净的|unspoiled or in its original condition
proximity|接近|nearness in space or time
repudiate|否认；拒绝接受|to reject or deny firmly
resilient|有弹性的|able to recover after difficulty
resonance|共鸣|a strong echo or lasting emotional effect
revolt|反抗|to rebel against authority
robust|强健的|strong and effective
scrutinize|仔细检查|to examine closely
scrutiny|详细审查|close examination
sensitivity|敏感度|responsiveness to changes or feelings
sermon|布道|a religious or moral speech
soothe|安慰；缓和|to calm or ease
steer|引导|to guide a direction
stricture|约束；指责|a restriction or severe criticism
striking|引人注目的|remarkably noticeable
substantiate|证实|to support a claim with evidence
succession|连续；交替|a sequence of things following one another
tempting|有诱惑力的|attractive or appealing
visualize|想象|to form a mental image
vacate|撤出|to leave a place unoccupied
yield|产出；让步|to produce; to give way
advocate|支持；提倡|to publicly support
appraise|评价|to assess quality or value
conceivable|可想象的|possible to imagine
copious|大量的|abundant in quantity
counteract|抵消|to act against an effect
delusional|妄想的|based on false beliefs
disparate|不同的|fundamentally different
embrace|接受|to accept willingly
engender|产生；导致|to bring about
equivocal|模棱两可的|ambiguous or open to several interpretations
exclusive|独有的|limited to a particular group
homogeneous|同种类的|uniform in composition
inconsequential|不重要的|of little importance
individualistic|个人主义的|emphasizing individual independence
insuperable|无法克服的|impossible to overcome
irreproachable|无可指责的|beyond criticism
monetize|变现|to turn into a source of income
outsized|特大的|unusually large
preliminary|初步的|coming before the main activity
pugnacious|好斗的|eager to argue or fight
recognition|认出；赞赏|identification or acknowledgment
register|登记；显示|to record; to indicate
reverberate|回响|to echo or have continuing effects
scheme|密谋|to make a secret plan
sporadic|偶发的|occurring irregularly
spurious|虚假的|false or not genuine
supposition|猜测|an assumption without firm proof
synopsis|概要|a brief summary
vindicate|证明无辜|to clear from blame or prove right
acclaim|赞扬|public praise
ambivalence|矛盾情绪|mixed or conflicting feelings
apathy|冷漠|lack of interest or concern
augment|增加|to make greater
behold|看见|to see or observe
breadth|广度|width or range
conceptual|概念的|related to ideas rather than objects
condescending|居高临下的|showing a sense of superiority
controversy|争议|public disagreement
daunting|令人畏惧的|seeming difficult or intimidating
discern|辨别|to recognize or distinguish
exploit|利用；剥削|to use for advantage, sometimes unfairly
illusory|虚幻的|based on illusion rather than reality
impartiality|公平|fairness without favoritism
imposing|壮观的|impressive in size or appearance
incongruous|不协调的|out of place or inconsistent
incorporate|包含|to include as part of a whole
indigenous|本土的|native to a place
intricate|复杂的|containing many connected details
irrefutable|无可辩驳的|impossible to disprove
lean|倚靠；瘦的|to incline; having little fat
myriad|无数|a very large number
neglect|忽视|to fail to give proper attention
orthodox|正统的|following established beliefs
overshadow|使黯然失色|to make something seem less important
palpable|明显的|able to be clearly perceived
pervasive|普遍的|spread throughout
presuppose|预先假定|to assume beforehand
provocative|挑衅的|likely to provoke a reaction
regard|看待；尊重|to consider; respect
reverentially|恭敬地|with deep respect
satiate|使满足|to satisfy fully
scrupulous|一丝不苟的|careful and morally principled
seclude|使隔绝|to keep apart from others
serenely|平静地|in a calm manner
skeptically|怀疑地|with doubt
supplant|取代|to replace
sway|影响；摇摆|to influence; to move side to side
tip|顶端；提示；倾斜|a pointed end; advice; to tilt
unclassifiable|不可分类的|not able to be placed in a category
venerate|尊敬|to regard with deep respect
ameliorate|改善|to improve a bad condition
amorphous|无固定形状的|lacking a definite shape
induce|引起|to cause or bring about
ingrained|根深蒂固的|firmly established and difficult to change
anticipate|预期|to expect or prepare for
apprise|告知|to inform
austerity|节俭；紧缩|strict economy or simplicity
coalesce|联合|to come together into one
coarseness|粗糙|roughness in texture or manner
conjecture|猜想|a guess based on incomplete evidence
customary|习惯的|usual or traditional
dispersed|分散的|spread over an area
eccentricity|古怪|unconventional behavior
idiosyncratic|独特的|peculiar to an individual
intermediate|中间的|between two stages
juxtapose|并置|to place side by side for comparison
pessimism|悲观|expectation of negative outcomes
placate|安抚|to calm someone’s anger
specify|明确规定|to state precisely
stipulate|规定|to demand as a condition
superfluous|多余的|more than necessary
tranquility|宁静|a state of calm
unattainable|无法获得的|impossible to achieve
accentuate|强调|to make more noticeable
assertive|坚定自信的|confident in expressing opinions
commitment|投入|dedication to a purpose
conjunctive|连接的|serving to connect
credible|可信的|worthy of belief
convoluted|复杂难懂的|extremely complicated
deception|欺骗|the act of misleading
ineluctable|不可避免的|impossible to avoid
inducement|诱因|something that motivates action
manifestation|表现|a visible sign of something
momentous|重大的|of great importance
nebulous|模糊的|vague or poorly defined
obscure|晦涩的；掩盖|unclear; to conceal
precipitate|促成；加速|to cause something to happen suddenly
pretext|借口|a false reason hiding a real motive
profound|深刻的|very deep or insightful
protectionist|贸易保护主义者|a supporter of shielding domestic industries
reign|统治|to rule as a monarch
spectacle|壮观景象|an impressive public display
stabilize|使稳定|to make steady
irresolvable|无法解决的|not able to be settled
survey|调查；环顾|to examine broadly; a systematic investigation
unequivocal|明确的|clear and unambiguous
assuage|缓解|to ease pain or anxiety
collaboration|合作|joint work toward a goal
confounded|困惑的|bewildered
denounce|公开谴责|to condemn publicly
detractor|贬低者|someone who criticizes or diminishes
eccentric|古怪的|unconventional
galvanize|激励|to spur into action
idealized|理想化的|presented as more perfect than reality
magnify|放大|to make appear larger
meager|不足的|small in quantity or quality
timescale|时间范围|the period over which events occur
transpose|调换|to change positions or order
obliterate|消除|to destroy or erase completely
precursor|先驱|something that comes before another
prevalence|普遍程度|how widespread something is
proxy|代理人|a substitute acting for another
understated|低调的|expressed with restraint
unsettle|使不安|to disturb or make uncertain
variation|变化|a difference or change
withdraw|撤回|to remove or take back
accommodate|容纳|to provide space or adjust to
acquaintance|熟人|someone known but not close
capitalize|提供资本；大写|to fund; to write in capital letters
compile|汇编|to collect and arrange
constrained|受限制的|limited by conditions
counterbalance|抵消|to offset an opposing effect
counterpart|对应者|a person or thing with a similar function
credibility|可信度|the quality of being believable
define|定义|to state the meaning of
detect|察觉|to discover or notice
dismissal|不予理会|rejection or refusal to consider
elicit|引出|to draw out a response
erratic|不规则的|unpredictable or inconsistent
evince|表明|to reveal clearly
empirical|实证的|based on observation or experiment
establish|确立|to set up or demonstrate
fashion|塑造|to make or shape
feasible|可行的|possible to carry out
fictionalize|使小说化|to turn real events into fiction
forage|觅食|to search for food
gastronomy|烹饪艺术|the study or art of good food
lullaby|摇篮曲|a soothing song for sleep
massive|巨大的|very large in scale
meditation|冥想|focused mental reflection
meticulous|谨慎细致的|extremely careful about details
metropolitan|大都市的|relating to a major city
mortal|终有一死的|subject to death
oversized|过大的|larger than usual`,
2024:`attribute|特征；归因于|a characteristic; to regard as caused by
belie|掩饰；证明错误|to contradict an impression or claim
collaborate|合作|to work together
constellation|星群；一系列|a group of stars or related things
constitute|组成|to form or make up
converge|汇聚|to come together
counterintuitive|反直觉的|contrary to what intuition suggests
deposit|沉积物；沉淀|material laid down; to place
depression|凹陷；低落|a lowered area or state
descendant|后代|someone descended from an ancestor
duplicate|复制|to make an exact copy
endorsement|支持|an expression of approval
epitomize|成为典范|to be a perfect example of
exceptional|杰出的；例外的|unusually good or outside the norm
exemplify|例证|to illustrate by example
exponent|拥护者；指数|a supporter; a mathematical power
fluctuate|波动|to rise and fall irregularly
foresight|远见|the ability to anticipate future needs
forestall|先发制人|to prevent by acting beforehand
frequent|常去|to visit often
habitable|适宜居住的|suitable for living in
hallmark|特征|a distinctive sign
lineage|血统|a line of descent
linger|徘徊；停留|to remain longer than expected
mutable|可变的|capable of change
overreach|弄巧成拙|to go beyond sensible limits
predate|早于|to exist before
prolific|多产的|producing much
pupil|学生；瞳孔|a student; the opening in the iris
renovate|翻新|to restore or improve a structure
retrieve|取回|to recover
secluded|偏僻的|sheltered from others
sedentary|久坐的|involving little physical activity
synonymous|同义的|having the same meaning
tempo|节奏|the speed of an activity or music
withstand|承受|to resist successfully
air|神态；播出|an impression; to broadcast
affiliate|附属机构|an associated organization
alleviate|减轻|to make suffering less severe
attribute to|归因于|to explain as caused by
magnitude|重要性；大小|size or extent
mandatory|强制的|required
perceptive|有洞察力的|quick to notice and understand
peripheral|边缘的|not central
captivating|迷人的|holding attention
clumsy|笨拙的|awkward in movement or execution
concentration|浓度；专注|the amount in a mixture; focused attention
contemptuous|鄙视的|showing scorn
continuity|持续性|unbroken connection
disdainful|轻蔑的|showing contempt
dwindling|减少的|gradually becoming smaller
entice|诱使|to attract with a reward
envision|设想|to imagine a future possibility
eternity|永恒|endless time
ethereal|轻盈的；超凡的|delicate or otherworldly
facilitate|促进|to make easier
haunt|萦绕|to remain persistently in the mind
infeasible|不可行的|not practical to carry out
precedent|先例|an earlier example guiding later action
provincial|地方的；狭隘的|regional; limited in outlook
recount|叙述|to tell in detail
repudiation|否认|the act of rejecting a claim
resilience|恢复力|the ability to recover
salient|显著的|most noticeable or relevant
scaffold|脚手架；支持框架|a temporary supporting structure
sophistication|成熟；复杂性|refinement or complexity
subtlety|微妙|a fine or delicate distinction
temperate|温和的|moderate or mild
undermine|削弱|to weaken the basis or effectiveness of
validate|证实|to confirm validity
vibrate|振动|to move rapidly back and forth
alignment|结盟；对齐|arrangement in line or agreement
amass|积累|to gather a large amount
ambiguity|模糊|uncertainty of meaning
concur|同意|to agree
conflated|混为一谈的|combined as though two things were the same
conventional|传统的|following established practice
demarcated from|与……划分开|marked as separate from
derive from|起源于|to come from
desultory|漫无目的的|lacking a clear plan
discretion|谨慎；决定权|careful judgment; freedom to decide
exacerbate|使恶化|to make a problem worse
ideological|意识形态的|related to a system of beliefs
laud|赞美|to praise
leverage|影响力；利用|influence; to use to advantage
notional|理论上的|existing as an idea rather than reality
petition|请愿|a formal request
polarization|两极分化|division into opposing groups
recalcitrant|桀骜不驯的|resistant to authority
reciprocate|回报|to respond with a corresponding action
reconstitute|重新组成|to form again
retroactively|追溯地|with effect on an earlier period
sanguine|乐观的|optimistic despite difficulty
transparency|透明度|openness or clarity
trivial|微不足道的|of little significance
veritable|名副其实的|genuine or aptly described
misanthropic|厌世的|disliking humankind
amplify|放大|to increase strength or intensity
analogous|类似的|comparable in relevant respects
anatomical|解剖学的|related to bodily structure
arduous|艰苦的|requiring great effort
associative|关联的|involving connections
contentious|有争议的|likely to cause disagreement
counterfactual|反事实的|contrary to what actually occurred
electrifying|激动人心的|extremely exciting
esteem|尊重|high regard
haphazard|无计划的|lacking order or planning
illuminate|阐明；照亮|to clarify; to light up
novel|新颖的|new and original
oddity|奇事|an unusual thing
rectify|纠正|to put right
summation|概括|a summary
tranquil|宁静的|calm and peaceful
vapor|蒸气|a substance in gaseous form
visible|可见的|able to be seen
warranted|有根据的|justified
amenity|便利设施|a useful or pleasant facility
arcane|晦涩的|understood by few
bureaucratic|官僚的|related to administrative procedures
catalyst|催化剂|something that speeds or triggers change
contingent|取决于的|dependent on a condition
correspond to|相当于；相符|to match or relate to
extraneous|无关的|not relevant
defunct|不再存在的|no longer operating
denigrate|贬低|to unfairly criticize
designate|指定|to assign or identify
discount|低估；折扣|to dismiss in importance; a price reduction
misconstrue|误解|to interpret incorrectly
nuance|细微差别|a subtle distinction
nullify|使无效|to cancel the effect of
obligate|使有义务|to bind to a duty
originality|独创性|the quality of being new
overlook|忽视|to fail to notice
oversight|监督；疏忽|supervision; an accidental omission
outstrip|超过|to surpass
periphery|边缘|the outer boundary
practicality|实用性|usefulness in real situations
publicity|宣传|public attention
resemblance|相似|similarity
reserve|储备；保留|a stored supply; to keep aside
disparage|轻视|to speak of as unimportant
explicable|可解释的|able to be explained
in tribute to|向……致敬|in honor of
inadvertently|无意中|without intention
inhibit|抑制|to restrain or prevent
intangible|无形的|not physically touchable
mimic|模仿|to imitate
minutiae|细枝末节|small details
simulation|模拟|an imitation of a process
sophisticated|精密的；老练的|complex or refined
stymie|阻碍|to hinder progress
symmetry|对称|balanced correspondence
ubiquitous|无处不在的|present everywhere
viable|可行的|capable of working successfully
affecting|感人的|emotionally moving
agglomeration|聚集物|a collection of things
cherish|珍爱|to value deeply
circulate|流通|to move through a system
clustering|聚集|forming groups
collocate|搭配|to occur together
colonialism|殖民主义|control of one territory by another
critique|批评；评论|a detailed analysis or evaluation
decisive|决定性的|settling an issue
distinctive|独特的|having a recognizable characteristic
dynamic|动态的|characterized by activity or change
erect|竖立；直立的|to build; upright
exclusively|仅仅|only
extract|提取|to remove from a whole
heterogeneous|各种各样的|made of different kinds
legacy|遗产|something handed down
mural|壁画|a painting on a wall
outline|概述；轮廓|a summary; outer shape
presage|预示|to signal a future event
pretentious|自命不凡的|trying to appear more impressive than warranted
prohibitive|禁止性的；昂贵的|preventing action through restriction or expense
replicate|复制|to reproduce
shrewd|精明的|showing sharp practical judgment
spectral|幽灵般的|ghostlike; related to a spectrum
spillover|溢出效应|an effect extending beyond its original area
subordinate|次要的|lower in rank or importance
suppress|压制|to restrain or prevent expression
tentacle|触角|a flexible projecting limb
unassuming|谦逊的|modest and unpretentious
imperative|必要的|essential or urgent
intrinsic|内在的|belonging to the essential nature
uncanny|异常的|strangely remarkable
unintentionally|无意地|without deliberate purpose
banal|平庸的|unoriginal and dull
bar|阻止|to prevent entry or action
benevolent|仁慈的|kind and well-meaning
biased|有偏见的|unfairly favoring a side
calibration|校准|adjustment against a standard
candor|坦率|honest openness
coincide with|与……一致|to occur together or correspond
comprehensive|全面的|covering all relevant aspects
consensus|共识|general agreement
convert|转变|to change form
corollary|必然结果|a proposition or consequence that follows
counterproductive|适得其反的|having the opposite of the intended effect
cynical|愤世嫉俗的|distrustful of others’ motives
deliberately|故意地|intentionally
deliberation|深思|careful consideration
differ from|与……不同|to be unlike
disingenuous|不真诚的|pretending to be candid
disparity|差距|a significant difference
dogmatic|教条的|asserting beliefs as unquestionably true
equivalence|等价|equality of value or meaning
excessive|过多的|beyond a reasonable amount
exhaustive|详尽的|covering every relevant detail
fluctuation|波动|an irregular change
hastily|匆忙地|with excessive speed
implicit|暗示的|implied rather than stated
incentive|激励|something that motivates
indisputable|无可争辩的|not open to reasonable doubt
indistinct|模糊的|not clearly defined
ineffectual|无效的|not producing the desired effect
ingenious|巧妙的|clever and inventive
irrelevant|无关的|not connected to the matter
minimize|最小化|to reduce as much as possible
misinformed|误导的|having incorrect information
prudence|谨慎|careful practical judgment
reverence|尊重|deep respect
superficial|表面的|concerned only with the surface
symbolize|象征|to represent
tenuous|薄弱的|weak or only slightly supported
unyielding|坚定的|not giving way
vacillating|动摇的|wavering between alternatives
vigilance|警惕|careful watchfulness`,
2025:`abatement|减弱|a reduction in intensity
affectionate|深情的|showing fondness
aggregation|总数；聚集|a collection or combination
amalgamate|合并|to combine into one
auspiciously|吉利地|in a way suggesting future success
bypass|绕开|to go around or avoid
capitalize on|利用|to take advantage of
cascade|倾泻|a series falling or occurring in succession
concentric|同心的|sharing a common center
contemporaneous|同时期的|existing at the same time
curtail|缩减|to reduce or cut short
dearth|缺乏|a scarcity
decouple|分离|to separate connected things
inexplicably|无法解释地|in a way that cannot be explained
material|材料；重要的|substance; significant to the issue
mediate|调解|to intervene to resolve a dispute
metabolize|代谢|to process chemically in an organism
myopic|目光短浅的|lacking long-term perspective
nonchalance|漠不关心|an appearance of casual unconcern
obviate|消除必要性|to remove a need or difficulty
perpetrate|犯；实施|to commit a harmful act
perturbation|扰动；不安|a disturbance
prank|恶作剧|a mischievous trick
predicate|基于；断言|to base on; to assert
probability|可能性|likelihood
diminish|减少|to make smaller
dissonance|不和谐|a lack of harmony
discrepant|不一致的|in disagreement
emblematic|象征性的|serving as a symbol
encapsulate|概括|to express the essential features briefly
entail|需要；导致|to involve as a necessary consequence
evade|逃避|to avoid or escape
fortitude|坚毅|courage through adversity
furnish|提供|to supply
indolence|懒惰|avoidance of effort
promulgate|传播；颁布|to make widely known
refute|驳斥|to prove a claim wrong
revelation|揭示|a surprising disclosure
somnolence|困倦|sleepiness
sparse|稀少的|thinly distributed
spoiler|剧透|information revealing a plot outcome
susceptible|易受影响的|vulnerable to an influence
swap|交换|to exchange
typify|代表|to be a characteristic example of
address|向……讲话；处理|to speak to; to deal with
affiliated|附属的|officially connected
anomalous|异常的|deviating from what is usual
insurmountable|无法克服的|impossible to overcome
intertwine|交织|to twist or connect together
apprentice|学徒|someone learning a trade
backdrop|背景|the setting behind an event
beguile|使入迷；诱骗|to charm or deceive
characterize|描述……特征|to describe distinctive qualities
coincidental|巧合的|occurring together by chance
compound|加重；组成|to intensify; to combine
considerable|相当大的|significant in amount
considerate|体贴的|thoughtful of others
decry|公开谴责|to criticize publicly
dissipate|消散|to scatter or gradually disappear
distinguish|区分|to recognize a difference
expedite|加快|to make a process happen sooner
express|明确的；表达|explicit; to convey
extraction|提取|the act of removing
facetious|开玩笑的|treating a serious matter with inappropriate humor
facilitator|推动者|someone who makes a process easier
franchise|特许经营权|an authorization to operate a business
harbinger|预兆|a sign of something to come
inertia|惯性|resistance to change
infinitesimal|极微小的|extremely small
opt for|选择|to choose
overdue|逾期的|not done by the expected time
paucity|缺乏|an insufficient quantity
pen|写；关押|to write; to confine
permeable|可渗透的|allowing substances to pass through
persecute|迫害|to mistreat systematically
placid|平静的|calm and undisturbed
predominantly|主要地|for the most part
premium|保险费；额外费用|an insurance payment; an additional charge
proponent|支持者|someone who advocates an idea
ratify|正式批准|to approve formally
recur|重现|to happen again
reductive|过于简化的|oversimplifying a complex subject
redundancy|冗余|unnecessary repetition
reduplication|重复|the act of doubling
repository|储存库|a place where things are stored
respect|关于；尊重|a particular aspect; regard
resurgence|复苏|a renewed increase
sequester|隔离|to isolate
slumber|睡眠|to sleep
solitary|独自的|alone
steward|管理者|someone responsible for care or management
turnover|营业额；人员更替|business revenue; replacement of personnel
abate|减弱|to become less intense
applicable|适用的|relevant or appropriate
approximate|近似的；估计|close to exact; to estimate
attest to|证实|to provide evidence of
attrition|损耗|gradual reduction through wear or loss
capacious|宽敞的|able to hold much
circumspection|谨慎|careful consideration of risks
collude with|与……串通|to cooperate secretly for wrongdoing
compensate|补偿|to make up for a loss
component|组成部分|a part of a larger whole
cursory|粗略的|quick and lacking attention
demeanor|举止|outward behavior
discerning|有洞察力的|showing good judgment
discrepancy|差异|an inconsistency between things
dissociate|脱离关系|to separate or disconnect
elaborate|复杂的；详述|detailed; to explain further
elusive|难以捉摸的|difficult to find or grasp
epitome|典范|a perfect example
exemplar|榜样|a model to imitate
extort|敲诈|to obtain by threats
finesse|技巧|skillful handling
grudgingly|不情愿地|with reluctance
impugn|质疑|to challenge the validity of
inverse|相反的|opposite in order or relationship
indices|指数；指标|plural of index
omen|预兆|a sign of a future event
outmoded|过时的|no longer current
perceptible|可察觉的|able to be noticed
proclamation|宣告|an official announcement
proliferation|激增|rapid increase or spread
quotidian|寻常的|ordinary or everyday
recalibrate|重新校准|to adjust a standard again
recurrence|再次发生|the act of happening again
rehabilitate|使康复|to restore to a sound condition
replicability|可重复性|the ability to reproduce a result
safeguard|保护|to protect from harm
sanction|制裁；许可|a penalty; official approval
self-servingly|自私地|in a way that benefits oneself
scenario|设想|a possible sequence of events
sporadically|偶尔地|at irregular intervals
subdued|低沉的|restrained or quiet
synthesis|综合|a combination into a whole
uncontroversial|无争议的|not causing disagreement
unfailing|可靠的|consistently dependable
universal|普遍的|applying to all
aggrieve|使苦恼|to distress or treat unfairly
cite|引用|to quote or refer to as evidence
colossal|巨大的|extremely large
compatibility|兼容性|the ability to exist together
deplete|耗尽|to use up a supply
designation|指定；称号|an official name or assignment
diffusion|扩散|the spreading of something
embellish|装饰；添油加醋|to decorate or add invented details
enmity|敌意|deep hostility
improvise|即兴创作|to create without preparation
incur|招致|to become subject to a cost or consequence
instigate|激发|to initiate or provoke
invoke|援引|to call upon or appeal to
notoriously|众所周知地|widely known for a negative quality
outlier|异常值|a data point far from others
quintessential|典型的|representing the most perfect example
reciprocal|相互的|given or felt by both sides
reconcile|协调|to make compatible or restore harmony
unprecedented|前所未有的|never previously known
attenuate|使减弱|to reduce in strength
caricature|讽刺画|an exaggerated portrayal
celebrated|著名的|widely admired
clandestine|秘密的|kept secret
complementary|互补的|combining to enhance each other
continuum|连续体|a continuous range
deference|尊重；遵从|respectful submission to another
desolation|荒凉；悲哀|emptiness or deep distress
disingenuously|不真诚地|in a falsely candid manner
dispassionate|不带感情的|impartial and unemotional
diversion|转移注意|a distraction or alternate route
eschew|避免|to deliberately avoid
esoteric|深奥的|understood by a small specialized group
exorbitant|过高的|unreasonably excessive
expound|详细解释|to explain in detail
extemporaneous|即兴的|spoken without preparation
foraging|觅食|searching for food
generalizability|可推广性|the extent findings apply beyond a sample
impart|传授|to communicate or give
impede|阻碍|to slow or block progress
inconsistency|前后矛盾|a lack of agreement
incompatibility|不兼容|inability to coexist
inexplicable|无法解释的|not able to be explained
interplay|相互作用|reciprocal influence
juxtaposition|并置|placement side by side for comparison
malign|诽谤|to speak harmful falsehoods about
minimal|最小的|very small in degree
negligible|可忽略的|too small to matter
nuanced|有细微差别的|showing subtle distinctions
opaque|不透明的；难懂的|not transparent; difficult to understand
portend|预示|to indicate a future event
prefigure|预示|to foreshadow
preempt|抢先阻止|to act before and prevent
prescient|有预见力的|knowing what will happen
proliferate|激增|to increase rapidly
redundant|多余的|unnecessarily repetitive
scaling|缩放|changing according to a factor
scatter|分散|to spread in different directions
speculative|推测的|based on conjecture
subservience|从属|excessive obedience
subsume|包含|to include within a broader category
succinctly|简洁地|briefly and clearly
surreptitiously|秘密地|in a concealed manner
thwart|阻挠|to prevent success
trade-off|权衡|a compromise between competing benefits
well up|涌起|to rise or accumulate
acquiesce|默许|to accept without protest
at the expense of|以……为代价|causing harm or loss to
breathe|呼吸|to take air in and out
obsolete|过时的|no longer in use
pivotal|关键的|of central importance
plate tectonics|板块构造|the theory of moving crustal plates
plausibility|可信性|the quality of seeming reasonable
policy|政策；保险合同|a course of action; an insurance contract
prodigious|巨大的|extraordinarily great
pronounced|明显的|strongly noticeable
salvage|抢救|to rescue from loss
scale back|缩减|to reduce in size or scope
streamline|精简|to make more efficient
subtle|微妙的|not immediately obvious
transcend|超越|to go beyond a limit
transience|短暂|the quality of lasting briefly
extraterrestrial|外星的|originating beyond Earth
fault|找缺点|to criticize
flat|平淡的；平的|dull; level
foreground|突出|to emphasize
gape at|目瞪口呆地看|to stare with an open mouth
glorify|颂扬|to praise highly
hegemony|霸权|dominant influence
infidelity|不忠|unfaithfulness
inimitable|无法模仿的|so distinctive as to be impossible to copy
volatility|波动性|a tendency to change rapidly
whisk away|迅速带走|to remove quickly`};
const PERSONAL_WORDS=`conflate|混为一谈|to combine different things as if they were identical
lambaste|严厉批评|to criticize harshly
critical|关键的；批判的|essential; expressing careful judgment or disapproval
inviolable|不可侵犯的|not to be violated
permissible|允许的|allowed by a rule
posit|假定；提出|to put forward as a basis for argument
definitive|权威的；决定性的|conclusive or authoritative`;
const WORD_DETAILS={undermine:['weaken','strengthen','The contradictory measurements undermine the original hypothesis.'],conflate:['merge','distinguish','Do not conflate correlation with causation.'],epitomize:['exemplify','contradict','Her precise experiments epitomize careful scientific work.'],lambaste:['castigate','praise','The critic lambasted the report for its unsupported conclusions.'],overshadow:['eclipse','highlight','The sensational headline overshadowed the careful analysis.'],critical:['essential','unimportant','A control group is critical to interpreting the experiment.'],inviolable:['sacrosanct','violable','The committee regarded participant privacy as inviolable.'],permissible:['allowed','forbidden','Only noninvasive measurements were permissible.'],posit:['propose','reject','The researchers posit that temperature influences the reaction.'],substantiate:['corroborate','refute','Independent records substantiate the historian’s account.'],definitive:['conclusive','tentative','The limited sample cannot support a definitive conclusion.'],mitigate:['alleviate','exacerbate','The new barrier mitigated the effects of coastal flooding.'],equivocal:['ambiguous','unequivocal','The equivocal statement allowed several interpretations.'],empirical:['observational','theoretical','The claim requires empirical evidence from repeated observations.'],tenuous:['weak','robust','The connection between the two events remains tenuous.'],spurious:['false','genuine','The apparent correlation was spurious, arising from a third variable.'],corroborate:['confirm','contradict','Two independent studies corroborate the original finding.']};
const vocabMap=new Map();for(const [year,raw] of Object.entries(VOCAB_RAW)){for(const line of raw.split('\n')){const [word,zh,definition]=line.split('|');if(!definition)continue;const key=word.toLowerCase();if(vocabMap.has(key)){vocabMap.get(key).years.push(year);continue;}vocabMap.set(key,{id:key,word,zh,definition,years:[year]});}}for(const line of PERSONAL_WORDS.split('\n')){const [word,zh,definition]=line.split('|');vocabMap.set(word,{id:word,word,zh,definition,years:['Personal']});}const VOCAB=[...vocabMap.values()].map(w=>({...w,...(WORD_DETAILS[w.id]?{synonym:WORD_DETAILS[w.id][0],antonym:WORD_DETAILS[w.id][1],example:WORD_DETAILS[w.id][2]}:{})}));
const QUESTIONS=[];
function question(id,topic,level,prompt,options,correct,explanation,wrong,desmos){QUESTIONS.push({id,topic,level,prompt,options,correct,explanation,wrong,desmos});}
question('g1','boundaries','Core','The sensor recorded a sudden temperature _____ researchers repeated the experiment.',['increase, the','increase; the','increase the','increase; although the'],1,'Both parts are independent clauses. A semicolon joins them correctly.',['A comma alone creates a comma splice.','Correct: complete clause; complete clause.','Two complete clauses need a boundary.','A semicolon must join independent clauses; “although” makes the second clause dependent.']);
question('g2','essential','Core','The minerals ___ contain iron are attracted to the magnet.',['that',' , that,',' , that','that,'],0,'“That contain iron” identifies which minerals. It is essential and takes no commas.',['Correct: essential that-clause, no commas.','Paired commas incorrectly make essential information removable.','A comma before restrictive “that” is incorrect.','A comma separates the restrictive clause from its subject.']);
question('g3','tense','Core','In biology, osmosis ___ the movement of water through a selectively permeable membrane.',['has described','describes','describing','had described'],1,'This is a general scientific definition, so the simple present “describes” is appropriate.',['Present perfect emphasizes a relationship with earlier time, which the definition does not require.','Correct: simple present states a general truth.','A participle cannot supply the main finite verb here.','Past perfect requires a relevant later point in the past.']);
question('g4','verbs','Hard','The manuscript, ___ in a sealed archive for decades, reveals an unfamiliar account of the expedition.',['remained','has remained','remaining','it remained'],2,'“Reveals” is already the main finite verb. “Remaining” heads a nonfinite modifying phrase.',['A second finite verb lacks a conjunction or relative pronoun.','A second finite predicate does not fit the modifying phrase.','Correct: a participle modifies “manuscript.”','Adding a pronoun creates an improperly joined clause.']);
question('g5','clauses','Core','Which choice is a complete sentence?',['Although the samples were small.','Because the records were incomplete.','The researchers revised their estimate.','While the instruments were warming.'],2,'Only the third choice expresses a complete independent thought.',['Although introduces a dependent clause.','Because introduces a dependent clause.','Correct: subject + finite predicate + complete thought.','While introduces a dependent clause.']);
question('g6','punctuation','Core','The archive contains three kinds of _____ diaries, and maps.',['records: letters,','records, letters,','records; letters,','records letters,'],0,'The clause before the colon is complete. The list explains the three kinds.',['Correct: a complete clause introduces a list.','A comma does not clearly introduce this explanatory list.','The list is not an independent clause, so a semicolon fails.','The list needs an introductory punctuation mark.']);
question('g7','agreement','Hard','The collection of maps from several expeditions ___ stored in the climate-controlled room.',['are','were','is','have been'],2,'The head subject is singular “collection.” The phrase “of maps” does not change its number.',['Are agrees with maps, not collection.','Were is plural in this indicative statement.','Correct: collection is singular.','Have been is plural.']);
question('g8','modifiers','Core','Walking along the shoreline, ___ .',['the tide surprised the ecologist','the ecologist noticed unusual shells','unusual shells were visible','the shoreline contained unusual shells'],1,'The ecologist is the one walking, so that noun must follow the opening modifier.',['The tide cannot walk.','Correct: the ecologist performs both actions.','Shells cannot walk.','The shoreline cannot walk.']);
question('g9','parallel','Core','The field team focused on mapping the terrain, measuring the rainfall, and ___ .',['to record the wind','the wind was recorded','recording the wind','recorded wind'],2,'The coordinated items must be parallel: mapping, measuring, recording.',['An infinitive breaks the -ing pattern.','A full clause breaks the phrase pattern.','Correct: all three items use -ing forms.','A past-tense form breaks the pattern.']);
question('g10','pronouns','Core','Several scientists contributed to the project. The ___ findings were published together.',['scientist’s','scientists’','scientists','scientist'],1,'Several scientists own the findings. A regular plural ending in s takes an apostrophe after s.',['This indicates one scientist.','Correct: plural possessive.','The plural noun lacks a possessive apostrophe.','This is singular and not possessive.']);
question('g11','appositives','Hard','The survey included teams from Lima, Peru ___ Quito, Ecuador ___ and Bogotá, Colombia.',['; / ;',', / ,',': / :','; / ,'],0,'Semicolons separate list items that already contain commas. Use the same separator consistently.',['Correct: each city-country pair is one list item.','Commas obscure the boundaries of the complex list.','Colons do not separate these list items.','Mixed separators obscure the list structure.']);
question('t1','transitions','Core','The researchers needed to measure erosion more precisely. ___, they installed sensors along the riverbank.\nFirst identify the relationship.',['Contrast','Purpose','Simultaneous events','Concession'],1,'The second sentence describes a step taken to accomplish the first sentence’s aim: purpose. “To this end” fits.',['No opposing outcome appears.','Correct: the installation serves the stated aim.','The connection is a goal, not merely timing.','There is no admitted objection.']);
question('t2','transitions','Hard','The new method required more setup time. ___, it produced far more consistent results.',['Accordingly','Nevertheless','For example','Subsequently'],1,'The benefit holds despite a drawback, a concessive contrast. “Nevertheless” fits.',['More setup time does not logically cause consistency here.','Correct: despite the drawback, a benefit remains.','Consistency is not an example of setup time.','The passage emphasizes contrast rather than sequence.']);
question('t3','transitions','Core','One team monitored the coastline while another team, working at the same time, sampled offshore water. Which transition best signals this timing?',['Concurrently','Conversely','To this end','Granted'],0,'Concurrently means at the same time.',['Correct: simultaneous events.','Conversely signals an opposite relationship.','To this end introduces a step serving a goal.','Granted acknowledges a point before a qualification.']);
question('r1','evidence','Hard','Claim: adding mineral X increases algal growth. In a controlled trial, tanks with X had greater growth than otherwise identical tanks without X. What does this finding do?',['Proves X always increases growth in all lakes','Supports the claim under the tested conditions','Shows growth causes the addition of X','Shows X is unnecessary for any growth'],1,'X → greater growth is supported by the controlled comparison. The claim is supported, not universally proven.',['All lakes and always exceed the evidence.','Correct: preserves the comparison and limitation.','This reverses the direction.','This does not address the treatment’s effect.']);
question('r2','inference','Hard','A small study detected no difference between two treatments. The authors note that the sample may have been too small to detect modest effects. Which inference is supported?',['The treatments are definitely identical','Neither treatment can work','The study does not rule out a modest difference','The less expensive treatment is more effective'],2,'Failure to detect a difference is not proof of equality, especially with a small sample.',['No detected effect does not prove equality.','The comparison does not establish that both treatments fail.','Correct: modest effects may have gone undetected.','No evidence about relative cost or superiority is provided.']);
question('r3','cross-text','Hard','Text 1: Urban trees can lower summer temperatures, but irrigation costs limit their use in dry cities.\nText 2: Drought-tolerant urban trees can provide cooling with relatively little irrigation.\nHow would author 2 most likely respond to author 1?',['Deny that trees provide cooling','Offer a way to reduce the stated limitation','Argue that irrigation costs are always zero','Reject planting trees in all dry cities'],1,'Author 2 agrees on cooling but offers a response to the irrigation constraint.',['Text 2 explicitly recognizes cooling.','Correct: a particular kind of tree can reduce the limitation.','Little irrigation is not zero cost.','Text 2 supports a feasible planting choice.']);
question('r4','quantitative','Hard','Site A recorded 40 nesting pairs among 200 birds. Site B recorded 30 nesting pairs among 100 birds. A researcher claims B has more nesting pairs per bird. Which comparison supports the claim?',['40 is greater than 30','30/100 is greater than 40/200','200 is greater than 100','40 + 30 = 70'],1,'Compare the same rates: 0.30 > 0.20. The claim concerns pairs per bird, not total pairs.',['This compares totals, which support a different claim.','Correct: compares matching rates.','Population size alone does not establish the nesting rate.','A combined total does not compare the sites.']);
// Deterministic families generate fresh numbers for targeted repeats, with exact solutions.
function makeMath(topic,n=0){const k=n%20;let q;const wrap=(prompt,options,correct,explanation,wrong,desmos)=>({id:`${topic}-${n}`,topic,level:n%2?'Hard':'Core',prompt,options:options.map(String),correct,explanation,wrong,desmos});
if(topic==='quadratics'){const h=k+2,v=k+3,a=k%3+1;q=wrap(`What is the minimum value of f(x) = ${a}x² − ${2*a*h}x + ${a*h*h+v}?`,[v,a*h*h+v,h,-v],0,`Complete the square: f(x) = ${a}(x − ${h})² + ${v}. The square is nonnegative, so the minimum is ${v} at x = ${h}.`,['Correct: the vertex y-coordinate is the minimum.','This is the y-intercept, not the minimum.','This is the vertex x-coordinate.','The sign of the minimum has been reversed.'],`Graph y=${a}x^2-${2*a*h}x+${a*h*h+v}. Click the lowest point: (${h}, ${v}).`);}
if(topic==='polynomials'){const r=k+1,s=k+2,t=k+4,sum=r+s+t,pair=r*s+r*t+s*t,prod=r*s*t;q=wrap(`The monic polynomial x³ + ax² + bx + c has roots ${r}, ${s}, and ${t}. What is a?`,[-sum,prod,pair,sum],0,`By Vieta, a = −(${r}+${s}+${t}) = ${-sum}. The root product determines −c, not a.`,['Correct: negative sum of roots.','The product of the roots is −c.','The pairwise product sum is b.','The sum needs a negative sign.'],`Enter (x-${r})(x-${s})(x-${t}) and x^3+(${ -sum})x^2+${pair}x-${prod}. Their graphs coincide. Vieta is faster.`);}
if(topic==='geometry'){const scale=k%4+1,s=6*scale,h=4*scale,l=5*scale,total=s*s+2*s*l;q=wrap(`A right square pyramid has base side ${s} and vertical height ${h}. What is its total surface area?`,[total,2*s*l,s*s+2*s*h,s*s*h/3],0,`The face slant height is √(${h}²+${s/2}²) = ${l}. Total area = s² + 2sℓ = ${s*s} + ${2*s*l} = ${total}.`,['Correct: base area plus four triangular faces.','This is lateral area only; add the square base.','The face area requires slant height, not vertical height.','This is volume, with cubic units, not surface area.'],`Evaluate sqrt(${h}^2+(${s}/2)^2), then ${s}^2+2*${s}*ans. The diagram identifies which height to use.`);}
if(topic==='rational'){const r=k+2,b=k+5;q=wrap(`For x ≠ ${r}, (x² − ${r*r})/(x − ${r}) = ${b}. What is the valid solution?`,[b-r,r,b+r,`No solution`],0,`Factor: (x−${r})(x+${r})/(x−${r}) = x+${r}, with x ≠ ${r}. Thus x = ${b-r}.${b-r===r?' This candidate is excluded, so there is actually no valid solution.':''}`,['Correct: solve the simplified equation and check the domain.','This makes the original denominator zero.','This adds instead of subtracting the constant.','There is a valid candidate outside the restricted domain.'],`Graph y=(x^2-${r*r})/(x-${r}) and y=${b}; check the intersection x-value in the original denominator.`);if(b-r===r){q.correct=3;q.explanation=`The simplified equation gives x = ${r}, but this makes the original denominator zero. There is no valid solution.`;q.wrong=['This candidate is excluded by the original denominator.','This value is forbidden.','This does not satisfy the simplified equation.','Correct: the only candidate is excluded.'];}}
if(topic==='exponents'){const p=10+k;q=wrap(`A quantity rises by ${p}% and then falls by ${p}%. What fraction of its original value remains?`,[(1-p*p/10000).toFixed(4),'1.0000',(1+2*p/100).toFixed(4),(1-p/100).toFixed(4)],0,`Multiply factors: (1+${p}/100)(1−${p}/100) = 1−(${p}/100)² = ${(1-p*p/10000).toFixed(4)}.`,['Correct: the second change uses the new base.','Equal percentages do not cancel when bases differ.','This adds increases rather than applying increase then decrease.','This includes only the decrease.'],'Evaluate the product of the two growth factors directly.');}
if(topic==='functions'){const h=k+2;q=wrap(`If g(x) = f(x − ${h}) + 4, how does the graph of g compare with f?`,[`Right ${h}, up 4`,`Left ${h}, up 4`,`Right ${h}, down 4`,`Left ${h}, down 4`],0,`Inside x−${h} shifts right ${h}; outside +4 shifts up 4.`,['Correct: internal and external shifts.','An internal minus shifts right.','An external plus shifts up.','Both shift directions are reversed.'],`Try f(x)=x² and g(x)=(x-${h})²+4. Compare their vertices.`);}
if(topic==='triangles'){const r=k+2;q=wrap(`A circle has equation (x − 3)² + (y + 2)² = ${r*r}. What is its radius?`,[r,r*r,3,2],0,`The right side is r². Thus r = √${r*r} = ${r}. The center is (3, −2).`,['Correct: positive square root of r².','This is radius squared.','This is the center x-coordinate.','This is the absolute value of the center y-coordinate.'],`Graph the circle and compare the center to a point ${r} units horizontally away.`);}
if(topic==='units'){const s=k+2;q=wrap(`A square has area ${s*s} square feet. What is its area in square inches?`,[s*s*144,s*s*12,s*12,s*s/144],0,`1 foot = 12 inches, so 1 square foot = 144 square inches. Multiply ${s*s} × 144 = ${s*s*144}.`,['Correct: square the length conversion.','This uses a linear conversion for area.','This gives the side length in inches, not the area.','This converts in the wrong direction.'],'Enter the area in square feet multiplied by 12².');}
// Keep numerical distractors distinct, including parameter values that coincide.
if(q){const used=new Set([q.options[q.correct]]);for(let i=0;i<q.options.length;i++){if(i===q.correct)continue;if(used.has(q.options[i])){let candidate=Math.max(...q.options.map(Number).filter(Number.isFinite))+1;while(used.has(String(candidate)))candidate++;q.options[i]=String(candidate);q.wrong[i]='This value does not satisfy the requested quantity or the original equation.';}used.add(q.options[i]);}}
return q;}
for(const topic of TOPICS.filter(t=>t.section==='math'))for(let i=0;i<6;i++)QUESTIONS.push(makeMath(topic.id,i));
question('m-disc','quadratics','Hard','For what value of k does x² − 10x + k = 0 have exactly one distinct real solution?',['25','10','100','−25'],0,'Set the discriminant to zero: (−10)² − 4k = 0, so k = 25.',['Correct: the parabola touches the x-axis at x=5.','The linear coefficient is not the needed constant.','You must divide 100 by 4.','This produces two real roots.'],'Graph y=x²−10x+k with a k slider. At k=25 the vertex touches y=0.');
question('m-rat','rational','Hard','For x ≠ 2, (x² − k)/(x − 2) = 5. Which value of k gives exactly one valid solution?',['4','3','5','6'],0,'Clearing denominators gives x²−5x+10−k=0. With k=4: (x−2)(x−3)=0. Reject x=2; only x=3 remains.',['Correct: two algebraic roots, one excluded, one valid.','k=3 gives discriminant −3, so no real roots.','k=5 gives two real roots, neither equal to 2.','k=6 gives roots 1 and 4, both valid.'],'Graph y=(x²−4)/(x−2) and y=5. The original expression has a hole at x=2; the valid intersection is x=3.');
