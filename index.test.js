const { stringWrapCJK } = require('./lib')

const latin_Input = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas blandit tortor sit amet venenatis tempor. Ut sed laoreet mi. Pellentesque a mi nec justo rhoncus dictum. Mauris varius varius arcu venenatis condimentum. Duis eget massa mauris. Nunc fermentum lectus nec eleifend fringilla. Donec eget diam et felis sagittis dignissim.`
const latin_Wrapped_40 = `Lorem ipsum dolor sit amet, consectetur\nadipiscing elit. Maecenas blandit tortor\nsit amet venenatis tempor. Ut sed\nlaoreet mi. Pellentesque a mi nec justo\nrhoncus dictum. Mauris varius varius\narcu venenatis condimentum. Duis eget\nmassa mauris. Nunc fermentum lectus nec\neleifend fringilla. Donec eget diam et\nfelis sagittis dignissim.`
const latin_CarriageReturn_Wrapped_40 = `Lorem ipsum dolor sit amet, consectetur\radipiscing elit. Maecenas blandit tortor\rsit amet venenatis tempor. Ut sed\rlaoreet mi. Pellentesque a mi nec justo\rrhoncus dictum. Mauris varius varius\rarcu venenatis condimentum. Duis eget\rmassa mauris. Nunc fermentum lectus nec\releifend fringilla. Donec eget diam et\rfelis sagittis dignissim.`
const latin_IndentTest1 = `     Lorem ipsum dolor sit amet, consectetur adipiscing\n     elit. Maecenas blandit tortor sit amet venenatis\n     tempor. Ut sed laoreet mi. Pellentesque a mi nec justo\n     rhoncus dictum. Mauris varius varius arcu venenatis\n     condimentum. Duis eget massa mauris. Nunc fermentum\n     lectus nec eleifend fringilla. Donec eget diam et felis\n     sagittis dignissim.`
const latin_IndentTest2 = `-----Lorem ipsum dolor sit amet, consectetur adipiscing\n-----elit. Maecenas blandit tortor sit amet venenatis\n-----tempor. Ut sed laoreet mi. Pellentesque a mi nec justo\n-----rhoncus dictum. Mauris varius varius arcu venenatis\n-----condimentum. Duis eget massa mauris. Nunc fermentum\n-----lectus nec eleifend fringilla. Donec eget diam et felis\n-----sagittis dignissim.`
const latin_IndentTest3 = `ABABABABABLorem ipsum dolor sit amet, consectetur adipiscing\nABABABABABelit. Maecenas blandit tortor sit amet venenatis\nABABABABABtempor. Ut sed laoreet mi. Pellentesque a mi nec justo\nABABABABABrhoncus dictum. Mauris varius varius arcu venenatis\nABABABABABcondimentum. Duis eget massa mauris. Nunc fermentum\nABABABABABlectus nec eleifend fringilla. Donec eget diam et felis\nABABABABABsagittis dignissim.`
const latin_IndentTest4 = `ABABALorem ipsum dolor sit amet, consectetur adipiscing\nABABAelit. Maecenas blandit tortor sit amet venenatis\nABABAtempor. Ut sed laoreet mi. Pellentesque a mi nec justo\nABABArhoncus dictum. Mauris varius varius arcu venenatis\nABABAcondimentum. Duis eget massa mauris. Nunc fermentum\nABABAlectus nec eleifend fringilla. Donec eget diam et felis\nABABAsagittis dignissim.`
const latin_Wrapped_20_Indent_19 = `                   L\n                   o\n                   r\n                   e\n                   m\n                   i\n                   p\n                   s\n                   u\n                   m\n                   d\n                   o\n                   l\n                   o\n                   r\n                   s\n                   i\n                   t\n                   a\n                   m\n                   e\n                   t\n                   ,\n                   c\n                   o\n                   n\n                   s\n                   e\n                   c\n                   t\n                   e\n                   t\n                   u\n                   r\n                   a\n                   d\n                   i\n                   p\n                   i\n                   s\n                   c\n                   i\n                   n\n                   g\n                   e\n                   l\n                   i\n                   t\n                   .\n                   M\n                   a\n                   e\n                   c\n                   e\n                   n\n                   a\n                   s\n                   b\n                   l\n                   a\n                   n\n                   d\n                   i\n                   t\n                   t\n                   o\n                   r\n                   t\n                   o\n                   r\n                   s\n                   i\n                   t\n                   a\n                   m\n                   e\n                   t\n                   v\n                   e\n                   n\n                   e\n                   n\n                   a\n                   t\n                   i\n                   s\n                   t\n                   e\n                   m\n                   p\n                   o\n                   r\n                   .\n                   U\n                   t\n                   s\n                   e\n                   d\n                   l\n                   a\n                   o\n                   r\n                   e\n                   e\n                   t\n                   m\n                   i\n                   .\n                   P\n                   e\n                   l\n                   l\n                   e\n                   n\n                   t\n                   e\n                   s\n                   q\n                   u\n                   e\n                   a\n                   m\n                   i\n                   n\n                   e\n                   c\n                   j\n                   u\n                   s\n                   t\n                   o\n                   r\n                   h\n                   o\n                   n\n                   c\n                   u\n                   s\n                   d\n                   i\n                   c\n                   t\n                   u\n                   m\n                   .\n                   M\n                   a\n                   u\n                   r\n                   i\n                   s\n                   v\n                   a\n                   r\n                   i\n                   u\n                   s\n                   v\n                   a\n                   r\n                   i\n                   u\n                   s\n                   a\n                   r\n                   c\n                   u\n                   v\n                   e\n                   n\n                   e\n                   n\n                   a\n                   t\n                   i\n                   s\n                   c\n                   o\n                   n\n                   d\n                   i\n                   m\n                   e\n                   n\n                   t\n                   u\n                   m\n                   .\n                   D\n                   u\n                   i\n                   s\n                   e\n                   g\n                   e\n                   t\n                   m\n                   a\n                   s\n                   s\n                   a\n                   m\n                   a\n                   u\n                   r\n                   i\n                   s\n                   .\n                   N\n                   u\n                   n\n                   c\n                   f\n                   e\n                   r\n                   m\n                   e\n                   n\n                   t\n                   u\n                   m\n                   l\n                   e\n                   c\n                   t\n                   u\n                   s\n                   n\n                   e\n                   c\n                   e\n                   l\n                   e\n                   i\n                   f\n                   e\n                   n\n                   d\n                   f\n                   r\n                   i\n                   n\n                   g\n                   i\n                   l\n                   l\n                   a\n                   .\n                   D\n                   o\n                   n\n                   e\n                   c\n                   e\n                   g\n                   e\n                   t\n                   d\n                   i\n                   a\n                   m\n                   e\n                   t\n                   f\n                   e\n                   l\n                   i\n                   s\n                   s\n                   a\n                   g\n                   i\n                   t\n                   t\n                   i\n                   s\n                   d\n                   i\n                   g\n                   n\n                   i\n                   s\n                   s\n                   i\n                   m\n                   .`

const latinWithLongWord_Input = `Lorem ipsum dolor sit amet, consectetur abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc adipiscing elit. Maecenas blandit tortor sit amet venenatis tempor. Ut sed laoreet mi. Pellentesque a mi nec justo rhoncus dictum. Mauris varius varius arcu venenatis condimentum. Duis eget massa mauris. Nunc fermentum lectus nec eleifend fringilla. Donec eget diam et felis sagittis dignissim.`
const latinWithLongWord_Wrapped_40 = `Lorem ipsum dolor sit amet, consectetur\nabcabcabcabcabcabcabcabcabcabcabcabcabca\nbcabcabcabcabcabcabcabc adipiscing elit.\nMaecenas blandit tortor sit amet\nvenenatis tempor. Ut sed laoreet mi.\nPellentesque a mi nec justo rhoncus\ndictum. Mauris varius varius arcu\nvenenatis condimentum. Duis eget massa\nmauris. Nunc fermentum lectus nec\neleifend fringilla. Donec eget diam et\nfelis sagittis dignissim.`
const latinWithLongWord_Wrapped_60 = `Lorem ipsum dolor sit amet, consectetur abcabcabcabcabcabcab\ncabcabcabcabcabcabcabcabcabcabcabcabcabcabc adipiscing elit.\nMaecenas blandit tortor sit amet venenatis tempor. Ut sed\nlaoreet mi. Pellentesque a mi nec justo rhoncus dictum.\nMauris varius varius arcu venenatis condimentum. Duis eget\nmassa mauris. Nunc fermentum lectus nec eleifend fringilla.\nDonec eget diam et felis sagittis dignissim.`
const latinWithLongWord_NewlineBeforeLongWords_Wrapped_60 = `Lorem ipsum dolor sit amet, consectetur\nabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc\nabc adipiscing elit. Maecenas blandit tortor sit amet\nvenenatis tempor. Ut sed laoreet mi. Pellentesque a mi nec\njusto rhoncus dictum. Mauris varius varius arcu venenatis\ncondimentum. Duis eget massa mauris. Nunc fermentum lectus\nnec eleifend fringilla. Donec eget diam et felis sagittis\ndignissim.`
const latinWithLongWord_Wrapped_70 = `Lorem ipsum dolor sit amet, consectetur\nabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc\nadipiscing elit. Maecenas blandit tortor sit amet venenatis tempor. Ut\nsed laoreet mi. Pellentesque a mi nec justo rhoncus dictum. Mauris\nvarius varius arcu venenatis condimentum. Duis eget massa mauris. Nunc\nfermentum lectus nec eleifend fringilla. Donec eget diam et felis\nsagittis dignissim.`
const latinWithLongWord_NoBreakLongWords_Wrapped_50 = `Lorem ipsum dolor sit amet, consectetur\nabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc\nadipiscing elit. Maecenas blandit tortor sit amet\nvenenatis tempor. Ut sed laoreet mi. Pellentesque\na mi nec justo rhoncus dictum. Mauris varius\nvarius arcu venenatis condimentum. Duis eget massa\nmauris. Nunc fermentum lectus nec eleifend\nfringilla. Donec eget diam et felis sagittis\ndignissim.`

const latinWithExtraSpaces_Input = `Lorem ipsum dolor sit amet,    consectetur adipiscing elit. In vulputate consequat neque      eu consequat. Donec vehicula ligula nec sapien dapibus, vel     iaculis eros ultricies. Ut lacinia finibus velit, id porttitor ante consequat ut. Phasellus pharetra, velit at luctus faucibus, purus augue ullamcorper nisl, sit amet porta quam       lectus id augue.`
const latinWithExtraSpaces_Normalized = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vulputate consequat neque eu consequat. Donec vehicula ligula nec sapien dapibus, vel iaculis eros ultricies. Ut lacinia finibus velit, id porttitor ante consequat ut. Phasellus pharetra, velit at luctus faucibus, purus augue ullamcorper nisl, sit amet porta quam lectus id augue.`
const latinWithExtraSpaces_Normalized_Wrapped_60 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In\nvulputate consequat neque eu consequat. Donec vehicula\nligula nec sapien dapibus, vel iaculis eros ultricies. Ut\nlacinia finibus velit, id porttitor ante consequat ut.\nPhasellus pharetra, velit at luctus faucibus, purus augue\nullamcorper nisl, sit amet porta quam lectus id augue.`
const latinWithExtraSpaces_Normalized_Padded_Wrapped_60 = `Lorem-ipsum-dolor-sit-amet,-consectetur-adipiscing-elit.-In-\nvulputate-consequat-neque-eu-consequat.-Donec-vehicula------\nligula-nec-sapien-dapibus,-vel-iaculis-eros-ultricies.-Ut---\nlacinia-finibus-velit,-id-porttitor-ante-consequat-ut.------\nPhasellus-pharetra,-velit-at-luctus-faucibus,-purus-augue---\nullamcorper-nisl,-sit-amet-porta-quam-lectus-id-augue.------`
const latinWithExtraSpaces_Padded_Wrapped_60 = `Lorem ipsum dolor sit amet,    consectetur adipiscing elit.\nIn vulputate consequat neque      eu consequat. Donec ------\nvehicula ligula nec sapien dapibus, vel     iaculis eros ---\nultricies. Ut lacinia finibus velit, id porttitor ante -----\nconsequat ut. Phasellus pharetra, velit at luctus faucibus,\npurus augue ullamcorper nisl, sit amet porta quam       ----\nlectus id augue.--------------------------------------------`

const latinAndCJK_Input = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut lorem vel diam dapibus placerat. ７月には七夕がある。お願いだから泣かないで。イルカは人間に次いで最も知能が高く、やがては彼らとの対話も夢ではないと考えている科学者もいる。ログアウトするんじゃなかったよ。 Suspendisse viverra, nulla laoreet porta viverra, ipsum augue dapibus massa, non maximus magna urna maximus massa.`
const latinAndCJK_Wrapped_40 = `Lorem ipsum dolor sit amet, consectetur\nadipiscing elit. Donec ut lorem vel diam\ndapibus placerat. ７月には七夕がある。お\n願いだから泣かないで。イルカは人間に次い\nで最も知能が高く、やがては彼らとの対話も\n夢ではないと考えている科学者もいる。ログ\nアウトするんじゃなかったよ。 Suspendisse\nviverra, nulla laoreet porta viverra,\nipsum augue dapibus massa, non maximus\nmagna urna maximus massa.`
const latinAndCJK_Wrapped_50 = `Lorem ipsum dolor sit amet, consectetur adipiscing\nelit. Donec ut lorem vel diam dapibus placerat. ７\n月には七夕がある。お願いだから泣かないで。イルカは\n人間に次いで最も知能が高く、やがては彼らとの対話も\n夢ではないと考えている科学者もいる。ログアウトする\nんじゃなかったよ。 Suspendisse viverra, nulla\nlaoreet porta viverra, ipsum augue dapibus massa,\nnon maximus magna urna maximus massa.`
const latinAndCJK_CarriageReturn_Wrapped_60 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.\rDonec ut lorem vel diam dapibus placerat. ７月には七夕がある\r。お願いだから泣かないで。イルカは人間に次いで最も知能が高く\r、やがては彼らとの対話も夢ではないと考えている科学者もいる。\rログアウトするんじゃなかったよ。 Suspendisse viverra, nulla\rlaoreet porta viverra, ipsum augue dapibus massa, non\rmaximus magna urna maximus massa.`
const latinAndCJK_NoUseVisualWidth_Wrapped_50 = `Lorem ipsum dolor sit amet, consectetur adipiscing\nelit. Donec ut lorem vel diam dapibus placerat. ７月\nには七夕がある。お願いだから泣かないで。イルカは人間に次いで最も知能が高く、やがては彼らとの対話も夢\nではないと考えている科学者もいる。ログアウトするんじゃなかったよ。 Suspendisse\nviverra, nulla laoreet porta viverra, ipsum augue\ndapibus massa, non maximus magna urna maximus\nmassa.`
const latinAndCJK_IndentTest1 = `     Lorem ipsum dolor sit amet, consectetur adipiscing\n     elit. Donec ut lorem vel diam dapibus placerat. ７月に\n     は七夕がある。お願いだから泣かないで。イルカは人間に次\n     いで最も知能が高く、やがては彼らとの対話も夢ではないと\n     考えている科学者もいる。ログアウトするんじゃなかったよ\n     。 Suspendisse viverra, nulla laoreet porta viverra,\n     ipsum augue dapibus massa, non maximus magna urna\n     maximus massa.`
const latinAndCJK_IndentTest2 = `ああLorem ipsum dolor sit amet, consectetur adipiscing elit.\nああDonec ut lorem vel diam dapibus placerat. ７月には七夕が\nああある。お願いだから泣かないで。イルカは人間に次いで最も知\nああ能が高く、やがては彼らとの対話も夢ではないと考えている科\nああ学者もいる。ログアウトするんじゃなかったよ。 Suspendisse\nああviverra, nulla laoreet porta viverra, ipsum augue\nああdapibus massa, non maximus magna urna maximus massa.`
const latinAndCJK_Padded_Wrapped_57 = `Lorem-ipsum-dolor-sit-amet,-consectetur-adipiscing-elit.-\nDonec-ut-lorem-vel-diam-dapibus-placerat.-７月には七夕が-\nある。お願いだから泣かないで。イルカは人間に次いで最も知-\n能が高く、やがては彼らとの対話も夢ではないと考えている科-\n学者もいる。ログアウトするんじゃなかったよ。-Suspendisse-\nviverra,-nulla-laoreet-porta-viverra,-ipsum-augue-dapibus\nmassa,-non-maximus-magna-urna-maximus-massa.-------------`
const latinAndCJK_Padded_Wrapped_58 = `Lorem-ipsum-dolor-sit-amet,-consectetur-adipiscing-elit.--\nDonec-ut-lorem-vel-diam-dapibus-placerat.-７月には七夕があ\nる。お願いだから泣かないで。イルカは人間に次いで最も知能が\n高く、やがては彼らとの対話も夢ではないと考えている科学者も\nいる。ログアウトするんじゃなかったよ。-Suspendisse--------\nviverra,-nulla-laoreet-porta-viverra,-ipsum-augue-dapibus-\nmassa,-non-maximus-magna-urna-maximus-massa.--------------`
const latinAndCJK_Padded_Wrapped_59 = `Lorem-ipsum-dolor-sit-amet,-consectetur-adipiscing-elit.---\nDonec-ut-lorem-vel-diam-dapibus-placerat.-７月には七夕があ-\nる。お願いだから泣かないで。イルカは人間に次いで最も知能が-\n高く、やがては彼らとの対話も夢ではないと考えている科学者も-\nいる。ログアウトするんじゃなかったよ。-Suspendisse-viverra,\nnulla-laoreet-porta-viverra,-ipsum-augue-dapibus-massa,-non\nmaximus-magna-urna-maximus-massa.--------------------------`
const latinAndCJK_Padded_Wrapped_60 = `Lorem-ipsum-dolor-sit-amet,-consectetur-adipiscing-elit.----\nDonec-ut-lorem-vel-diam-dapibus-placerat.-７月には七夕がある\n。お願いだから泣かないで。イルカは人間に次いで最も知能が高く\n、やがては彼らとの対話も夢ではないと考えている科学者もいる。\nログアウトするんじゃなかったよ。-Suspendisse-viverra,-nulla-\nlaoreet-porta-viverra,-ipsum-augue-dapibus-massa,-non-------\nmaximus-magna-urna-maximus-massa.---------------------------`
const latinAndCJK_Wrapped_20_Indent_19 = `                   L\n                   o\n                   r\n                   e\n                   m\n                   i\n                   p\n                   s\n                   u\n                   m\n                   d\n                   o\n                   l\n                   o\n                   r\n                   s\n                   i\n                   t\n                   a\n                   m\n                   e\n                   t\n                   ,\n                   c\n                   o\n                   n\n                   s\n                   e\n                   c\n                   t\n                   e\n                   t\n                   u\n                   r\n                   a\n                   d\n                   i\n                   p\n                   i\n                   s\n                   c\n                   i\n                   n\n                   g\n                   e\n                   l\n                   i\n                   t\n                   .\n                   D\n                   o\n                   n\n                   e\n                   c\n                   u\n                   t\n                   l\n                   o\n                   r\n                   e\n                   m\n                   v\n                   e\n                   l\n                   d\n                   i\n                   a\n                   m\n                   d\n                   a\n                   p\n                   i\n                   b\n                   u\n                   s\n                   p\n                   l\n                   a\n                   c\n                   e\n                   r\n                   a\n                   t\n                   .\n                   \n                   ７\n                   月\n                   に\n                   は\n                   七\n                   夕\n                   が\n                   あ\n                   る\n                   。\n                   お\n                   願\n                   い\n                   だ\n                   か\n                   ら\n                   泣\n                   か\n                   な\n                   い\n                   で\n                   。\n                   イ\n                   ル\n                   カ\n                   は\n                   人\n                   間\n                   に\n                   次\n                   い\n                   で\n                   最\n                   も\n                   知\n                   能\n                   が\n                   高\n                   く\n                   、\n                   や\n                   が\n                   て\n                   は\n                   彼\n                   ら\n                   と\n                   の\n                   対\n                   話\n                   も\n                   夢\n                   で\n                   は\n                   な\n                   い\n                   と\n                   考\n                   え\n                   て\n                   い\n                   る\n                   科\n                   学\n                   者\n                   も\n                   い\n                   る\n                   。\n                   ロ\n                   グ\n                   ア\n                   ウ\n                   ト\n                   す\n                   る\n                   ん\n                   じ\n                   ゃ\n                   な\n                   か\n                   っ\n                   た\n                   よ\n                   。\n                   S\n                   u\n                   s\n                   p\n                   e\n                   n\n                   d\n                   i\n                   s\n                   s\n                   e\n                   v\n                   i\n                   v\n                   e\n                   r\n                   r\n                   a\n                   ,\n                   n\n                   u\n                   l\n                   l\n                   a\n                   l\n                   a\n                   o\n                   r\n                   e\n                   e\n                   t\n                   p\n                   o\n                   r\n                   t\n                   a\n                   v\n                   i\n                   v\n                   e\n                   r\n                   r\n                   a\n                   ,\n                   i\n                   p\n                   s\n                   u\n                   m\n                   a\n                   u\n                   g\n                   u\n                   e\n                   d\n                   a\n                   p\n                   i\n                   b\n                   u\n                   s\n                   m\n                   a\n                   s\n                   s\n                   a\n                   ,\n                   n\n                   o\n                   n\n                   m\n                   a\n                   x\n                   i\n                   m\n                   u\n                   s\n                   m\n                   a\n                   g\n                   n\n                   a\n                   u\n                   r\n                   n\n                   a\n                   m\n                   a\n                   x\n                   i\n                   m\n                   u\n                   s\n                   m\n                   a\n                   s\n                   s\n                   a\n                   .`
const latinAndCJK_CallbackTest1 = `          Lorem ipsum dolor sit amet,\n          consectetur adipiscing elit.\n          Donec ut lorem vel diam\n          ~~replaced line~~\n          がある。お願いだから泣かないで\n          。イルカは人間に次いで最も知能\n          が高く、やがては彼らとの対話も\n          夢ではないと考えている科学者も\n          いる。ログアウトするんじゃなか\n          nulla laoreet porta viverra,\n          ipsum augue dapibus massa, non\n          maximus magna urna maximus\n          massa.`
const latinAndCJK_CallbackTest2 = ``
const latinAndCJK_CallbackTest3 = `          a\n          a\n          a\n          a\n          a\n          a\n          a\n          a\n          a\n          a\n          a\n          a\n          a\n          a`
const latinAndCJK_ValidateTest1 = `           L\n           o\n           r\n           e\n           m\n           i\n           p\n           s\n           u\n           m\n           d\n           o\n           l\n           o\n           r\n           s\n           i\n           t\n           a\n           m\n           e\n           t\n           ,\n           c\n           o\n           n\n           s\n           e\n           c\n           t\n           e\n           t\n           u\n           r\n           a\n           b\n           c\n           a\n           b\n           c\n           a\n           b\n           c\n           a\n           b\n           c\n           a\n           b\n           c\n           a\n           b\n           c\n           a\n           b\n           c\n           a\n           b\n           c\n           a\n           b\n           c\n           a\n           b\n           c\n           a\n           b\n           c\n           a\n           b\n           c\n           a\n           b\n           c\n           a\n           b\n           c\n           a\n           b\n           c\n           a\n           b\n           c\n           a\n           b\n           c\n           a\n           b\n           c\n           a\n           b\n           c\n           a\n           b\n           c\n           a\n           b\n           c\n           a\n           d\n           i\n           p\n           i\n           s\n           c\n           i\n           n\n           g\n           e\n           l\n           i\n           t\n           .\n           D\n           o\n           n\n           e\n           c\n           u\n           t\n           l\n           o\n           r\n           e\n           m\n           v\n           e\n           l\n           d\n           i\n           a\n           m\n           d\n           a\n           p\n           i\n           b\n           u\n           s\n           p\n           l\n           a\n           c\n           e\n           r\n           a\n           t\n           .\n           \n           ７\n           月\n           に\n           は\n           七\n           夕\n           が\n           あ\n           る\n           。\n           お\n           願\n           い\n           だ\n           か\n           ら\n           泣\n           か\n           な\n           い\n           で\n           。\n           イ\n           ル\n           カ\n           は\n           人\n           間\n           に\n           次\n           い\n           で\n           最\n           も\n           知\n           能\n           が\n           高\n           く\n           、\n           や\n           が\n           て\n           は\n           彼\n           ら\n           と\n           の\n           対\n           話\n           も\n           夢\n           で\n           は\n           な\n           い\n           と\n           考\n           え\n           て\n           い\n           る\n           a\n           b\n           c\n           a\n           b\n           c\n           a\n           b\n           c\n           a\n           b\n           c\n           a\n           b\n           c\n           a\n           b\n           c\n           a\n           b\n           c\n           a\n           b\n           c\n           a\n           b\n           c\n           a\n           b\n           c\n           a\n           b\n           c\n           a\n           b\n           c\n           a\n           b\n           c\n           a\n           b\n           c\n           a\n           b\n           c\n           a\n           b\n           c\n           a\n           b\n           c\n           a\n           b\n           c\n           a\n           b\n           c\n           a\n           b\n           c\n           a\n           b\n           c\n           科\n           学\n           者\n           も\n           い\n           る\n           。\n           ロ\n           グ\n           ア\n           ウ\n           ト\n           す\n           る\n           ん\n           じ\n           ゃ\n           な\n           か\n           っ\n           た\n           よ\n           。\n           S\n           u\n           s\n           p\n           e\n           n\n           d\n           i\n           s\n           s\n           e\n           v\n           i\n           v\n           e\n           r\n           r\n           a\n           ,\n           n\n           u\n           l\n           l\n           a\n           l\n           a\n           o\n           r\n           e\n           e\n           t\n           p\n           o\n           r\n           t\n           a\n           v\n           i\n           v\n           e\n           r\n           r\n           a\n           ,\n           i\n           p\n           s\n           u\n           m\n           a\n           u\n           g\n           u\n           e\n           d\n           a\n           p\n           i\n           b\n           u\n           s\n           m\n           a\n           s\n           s\n           a\n           ,\n           n\n           o\n           n\n           m\n           a\n           x\n           i\n           m\n           u\n           s\n           m\n           a\n           g\n           n\n           a\n           u\n           r\n           n\n           a\n           m\n           a\n           x\n           i\n           m\n           u\n           s\n           m\n           a\n           s\n           s\n           a\n           .`

const latinAndCJKWithNBSP_Input = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut lorem vel diam\u00A0dapibus placerat. ７月には七夕がある。お願いだから泣かないで。イルカは人間に次いで最も知能が高く、やがては彼らとの対話も夢ではないと考えている科学者もいる。ログアウトするんじゃなかったよ。 Suspendisse viverra, nulla laoreet porta viverra, ipsum augue dapibus massa, non maximus magna urna maximus massa.`
const latinAndCJKWithNBSP_Wrapped_44 = `Lorem ipsum dolor sit amet, consectetur\nadipiscing elit. Donec ut lorem vel\ndiam dapibus placerat. ７月には七夕がある。\nお願いだから泣かないで。イルカは人間に次いで\n最も知能が高く、やがては彼らとの対話も夢では\nないと考えている科学者もいる。ログアウトする\nんじゃなかったよ。 Suspendisse viverra,\nnulla laoreet porta viverra, ipsum augue\ndapibus massa, non maximus magna urna\nmaximus massa.`

const latinAndCJKWithLongWord_Input = `Lorem ipsum dolor sit amet, consectetur abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc adipiscing elit. Donec ut lorem vel diam dapibus placerat. ７月には七夕がある。お願いだから泣かないで。イルカは人間に次いで最も知能が高く、やがては彼らとの対話も夢ではないと考えているabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc科学者もいる。ログアウトするんじゃなかったよ。 Suspendisse viverra, nulla laoreet porta viverra, ipsum augue dapibus massa, non maximus magna urna maximus massa.`
const latinAndCJKWithLongWord_Wrapped_50 = `Lorem ipsum dolor sit amet, consectetur abcabcabca\nbcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc\nabc adipiscing elit. Donec ut lorem vel diam\ndapibus placerat. ７月には七夕がある。お願いだから\n泣かないで。イルカは人間に次いで最も知能が高く、や\nがては彼らとの対話も夢ではないと考えているabcabcab\ncabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabca\nbcabc科学者もいる。ログアウトするんじゃなかったよ\n。 Suspendisse viverra, nulla laoreet porta\nviverra, ipsum augue dapibus massa, non maximus\nmagna urna maximus massa.`
const latinAndCJKWithLongWord_Wrapped_70 = `Lorem ipsum dolor sit amet, consectetur\nabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc\nadipiscing elit. Donec ut lorem vel diam dapibus placerat. ７月には七\n夕がある。お願いだから泣かないで。イルカは人間に次いで最も知能が高く、\nやがては彼らとの対話も夢ではないと考えている\nabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc科学者\nもいる。ログアウトするんじゃなかったよ。 Suspendisse viverra, nulla\nlaoreet porta viverra, ipsum augue dapibus massa, non maximus magna\nurna maximus massa.`
const latinAndCJKWithLongWord_NewlineBeforeLongWords_Wrapped_50 = `Lorem ipsum dolor sit amet, consectetur\nabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcab\ncabcabcabcabc adipiscing elit. Donec ut lorem vel\ndiam dapibus placerat. ７月には七夕がある。お願い\nだから泣かないで。イルカは人間に次いで最も知能が高\nく、やがては彼らとの対話も夢ではないと考えている\nabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcab\ncabcabcabcabc科学者もいる。ログアウトするんじゃな\nかったよ。 Suspendisse viverra, nulla laoreet\nporta viverra, ipsum augue dapibus massa, non\nmaximus magna urna maximus massa.`
const latinAndCJKWithLongWord_NoBreakLongWords_Wrapped_50 = `Lorem ipsum dolor sit amet, consectetur\nabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc\nadipiscing elit. Donec ut lorem vel diam dapibus\nplacerat. ７月には七夕がある。お願いだから泣かない\nで。イルカは人間に次いで最も知能が高く、やがては彼\nらとの対話も夢ではないと考えている\nabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc\n科学者もいる。ログアウトするんじゃなかったよ。\nSuspendisse viverra, nulla laoreet porta viverra,\nipsum augue dapibus massa, non maximus magna urna\nmaximus massa.`

const latinAndCJKWithExtraSpaces_Input = `Lore    m ipsum   dol    or sit a    met, consectetu r adipi    scing  elit. Donec ut  lorem ve l diam da pibus place rat. ７月 には七    夕がある 。お     願いだ から    泣かないで。イルカは人間に次いで最も知能が高く、やがては彼らとの対話も 夢ではな  いと 考え てい  る科学者も   いる。ログア  ウトする んじ    ゃなか    ったよ。 Suspendisse        viverra, nulla laoreet porta viverra, ipsum augue dapibus     massa, non maximus magna urna maximus massa.`
const latinAndCJKWithExtraSpaces_Normalized_Wrapped_60 = `Lore m ipsum dol or sit a met, consectetu r adipi scing\nelit. Donec ut lorem ve l diam da pibus place rat. ７月 には\n七 夕がある 。お 願いだ から 泣かないで。イルカは人間に次い\nで最も知能が高く、やがては彼らとの対話も 夢ではな いと 考え\nてい る科学者も いる。ログア ウトする んじ ゃなか ったよ。\nSuspendisse viverra, nulla laoreet porta viverra, ipsum\naugue dapibus massa, non maximus magna urna maximus massa.`
const latinAndCJKWithExtraWideSpaces_Input = `Lore    m ipsum   dol    or sit a    met, consectetu r adipi    scing  elit. Donec ut  lorem ve l diam da pibus place rat. ７月 には七    夕がある 。お     願いだ から　泣　か　な　い　で。イルカ　　は人間に　　次いで最も　　　知能が高く、やがては彼らとの対話も 夢ではな  いと 考え てい  る科学者も   いる。ログア  ウトする んじ    ゃなか    ったよ。 Suspendisse        viverra, nulla laoreet porta viverra, ipsum augue dapibus     massa, non maximus magna urna maximus massa.`
const latinAndCJKWithExtraWideSpaces_Normalized_Wrapped_60 = `Lore m ipsum dol or sit a met, consectetu r adipi scing\nelit. Donec ut lorem ve l diam da pibus place rat. ７月 には\n七 夕がある 。お 願いだ から　泣　か　な　い　で。イルカ\nは人間に　　次いで最も　　　知能が高く、やがては彼らとの対話\nも 夢ではな いと 考え てい る科学者も いる。ログア ウトする\nんじ ゃなか ったよ。 Suspendisse viverra, nulla laoreet\nporta viverra, ipsum augue dapibus massa, non maximus magna\nurna maximus massa.`
const latinAndCJKWithExtraWideSpaces_Normalized_NoWhitespaceMaintainWideSpace_Wrapped_60 = `Lore m ipsum dol or sit a met, consectetu r adipi scing\nelit. Donec ut lorem ve l diam da pibus place rat. ７月 には\n七 夕がある 。お 願いだ から 泣 か な い で。イルカ は人間に\n次いで最も 知能が高く、やがては彼らとの対話も 夢ではな いと\n考え てい る科学者も いる。ログア ウトする んじ ゃなか った\nよ。 Suspendisse viverra, nulla laoreet porta viverra, ipsum\naugue dapibus massa, non maximus magna urna maximus massa.`

const latinAndCJKWithLinebreak_Input = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut lorem vel diam\ndapibus placerat. ７月には七夕がある。お願いだから泣かないで。イルカは人間に次いで最も知能が高く、やがては彼らとの対話も夢ではないと考えている科学者もいる。ログアウトするんじゃなかったよ。 Suspendisse viverra, nulla laoreet porta viverra, ipsum augue dapibus massa, non maximus magna urna maximus massa.`
const latinAndCJKWithLinebreak_NoWhitespaceMaintainLinebreaks_Wrapped_79 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut lorem vel\ndiam dapibus placerat. ７月には七夕がある。お願いだから泣かないで。イルカは人間\nに次いで最も知能が高く、やがては彼らとの対話も夢ではないと考えている科学者もい\nる。ログアウトするんじゃなかったよ。 Suspendisse viverra, nulla laoreet porta\nviverra, ipsum augue dapibus massa, non maximus magna urna maximus massa.`
const latinAndCJKWithLinebreak_WhitespaceMaintainLinebreaks_Wrapped_79 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut lorem vel\ndiam\ndapibus placerat. ７月には七夕がある。お願いだから泣かないで。イルカは人間に次\nいで最も知能が高く、やがては彼らとの対話も夢ではないと考えている科学者もいる。\nログアウトするんじゃなかったよ。 Suspendisse viverra, nulla laoreet porta\nviverra, ipsum augue dapibus massa, non maximus magna urna maximus massa.`
const latinAndCJKWithLinebreak_WhitespaceMaintainLinebreaks_Wrapped_80 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut lorem vel diam\ndapibus placerat. ７月には七夕がある。お願いだから泣かないで。イルカは人間に次い\nで最も知能が高く、やがては彼らとの対話も夢ではないと考えている科学者もいる。ログ\nアウトするんじゃなかったよ。 Suspendisse viverra, nulla laoreet porta viverra,\nipsum augue dapibus massa, non maximus magna urna maximus massa.`
const latinAndCJKWithLinebreak_WhitespaceMaintainLinebreaks_Wrapped_81 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut lorem vel diam\ndapibus placerat. ７月には七夕がある。お願いだから泣かないで。イルカは人間に次い\nで最も知能が高く、やがては彼らとの対話も夢ではないと考えている科学者もいる。ログ\nアウトするんじゃなかったよ。 Suspendisse viverra, nulla laoreet porta viverra,\nipsum augue dapibus massa, non maximus magna urna maximus massa.`

/** Test for the line callback option. Used with 'latinAndCJK_Input'. */
const lineCallbackTest = line => {
  if (line.indexOf('７月には七夕') > -1) {
    return '~~replaced line~~'
  }
  if (line.indexOf('Suspendisse') > -1) {
    return null // totally removed line
  }
  return line
}

/** Performs a stringWrapCJK() operation and returns the longest line of the result. */
const getLongestLine = (input, opts = {}) => {
  const output = stringWrapCJK(input, opts)
  const lineLengths = output.split('\n').map(l => l.length).sort()
  return lineLengths[lineLengths.length - 1]
}

describe(`stringWrap package`, () => {
  describe(`stringWrapCJK()`, () => {
    describe(`it wraps text`, () => {
      describe(`with only Latin alphabet text`, () => {
        it(`with standard filler text`, () => {
          expect(stringWrapCJK(latin_Input, { maxWidth: 40 })).toBe(latin_Wrapped_40)
          expect(getLongestLine(latin_Input, { maxWidth: 40 })).toBeLessThanOrEqual(40)
          expect(getLongestLine(latin_Input, { maxWidth: 80 })).toBeLessThanOrEqual(80)
          expect(getLongestLine(latin_Input, { maxWidth: 120 })).toBeLessThanOrEqual(120)
        })
        it(`with a long word that needs to be split up and starts on a separate line`, () => {
          expect(stringWrapCJK(latinWithLongWord_Input, { maxWidth: 40 })).toBe(latinWithLongWord_Wrapped_40)
        })
        it(`with a long word that needs to be split up and starts on the same line`, () => {
          expect(stringWrapCJK(latinWithLongWord_Input, { maxWidth: 60 })).toBe(latinWithLongWord_Wrapped_60)
        })
        it(`with a long word that needs to be split up and starts on a new line because 'newlineBeforeLongWords' is true`, () => {
          expect(stringWrapCJK(latinWithLongWord_Input, { maxWidth: 60, newlineBeforeLongWords: true })).toBe(latinWithLongWord_NewlineBeforeLongWords_Wrapped_60)
        })
        it(`with a long word that fits on a separate line`, () => {
          expect(stringWrapCJK(latinWithLongWord_Input, { maxWidth: 70 })).toBe(latinWithLongWord_Wrapped_70)
        })
        it(`with a long word that isn't being broken because 'breakLongWords' is false`, () => {
          expect(stringWrapCJK(latinWithLongWord_Input, { maxWidth: 50, breakLongWords: false })).toBe(latinWithLongWord_NoBreakLongWords_Wrapped_50)
        })
      })
      describe(`with a mixture of Latin text and CJK wide characters`, () => {
        it(`with standard filler text`, () => {
          expect(stringWrapCJK(latinAndCJK_Input, { maxWidth: 40 })).toBe(latinAndCJK_Wrapped_40)
          expect(getLongestLine(latinAndCJK_Input, { maxWidth: 40 })).toBeLessThanOrEqual(40)
          expect(getLongestLine(latinAndCJK_Input, { maxWidth: 80 })).toBeLessThanOrEqual(80)
          expect(getLongestLine(latinAndCJK_Input, { maxWidth: 120 })).toBeLessThanOrEqual(120)
        })
        it(`with a long word that needs to be split up and starts on a separate line`, () => {
          expect(stringWrapCJK(latinAndCJKWithLongWord_Input, { maxWidth: 70 })).toBe(latinAndCJKWithLongWord_Wrapped_70)
        })
        it(`with a long word that needs to be split up and starts on the same line`, () => {
          expect(stringWrapCJK(latinAndCJKWithLongWord_Input, { maxWidth: 50 })).toBe(latinAndCJKWithLongWord_Wrapped_50)
        })
        it(`with a long word that needs to be split up and starts on a new line because 'newlineBeforeLongWords' is true`, () => {
          expect(stringWrapCJK(latinAndCJKWithLongWord_Input, { maxWidth: 50, newlineBeforeLongWords: true })).toBe(latinAndCJKWithLongWord_NewlineBeforeLongWords_Wrapped_50)
        })
        it(`with a long word that isn't being broken because 'breakLongWords' is false`, () => {
          expect(stringWrapCJK(latinAndCJKWithLongWord_Input, { maxWidth: 50, breakLongWords: false })).toBe(latinAndCJKWithLongWord_NoBreakLongWords_Wrapped_50)
        })
      })
    })
    describe(`it indents wrapped text`, () => {
      describe(`with only Latin alphabet text`, () => {
        it(`with a non-zero indent amount`, () => {
          expect(stringWrapCJK(latin_Input, { maxWidth: 60, indentAmount: 5 })).toBe(latin_IndentTest1)
        })
        it(`with a specific indent string`, () => {
          expect(stringWrapCJK(latin_Input, { maxWidth: 60, indentAmount: 5, indentChar: '-' })).toBe(latin_IndentTest2)
        })
        it(`with an indent string that is several characters long`, () => {
          expect(stringWrapCJK(latin_Input, { maxWidth: 60, indentAmount: 5, indentChar: 'AB' })).toBe(latin_IndentTest3)
        })
        it(`with an indent string that gets cropped`, () => {
          expect(stringWrapCJK(latin_Input, { maxWidth: 60, indentAmount: 5, indentChar: 'AB', indentType: 'crop' })).toBe(latin_IndentTest4)
        })
        it(`with only one character space`, () => {
          expect(stringWrapCJK(latin_Input, { maxWidth: 20, indentAmount: 19 })).toBe(latin_Wrapped_20_Indent_19)
        })
      })
      describe(`with a mixture of Latin text and CJK wide characters`, () => {
        it(`with a non-zero indent amount`, () => {
          expect(stringWrapCJK(latinAndCJK_Input, { maxWidth: 60, indentAmount: 5 })).toBe(latinAndCJK_IndentTest1)
        })
        it(`with an indent string that gets cropped`, () => {
          expect(stringWrapCJK(latinAndCJK_Input, { maxWidth: 60, indentAmount: 4, indentChar: 'あ', indentType: 'crop' })).toBe(latinAndCJK_IndentTest2)
        })
        it(`with only one character space`, () => {
          expect(stringWrapCJK(latinAndCJK_Input, { maxWidth: 20, indentAmount: 19 })).toBe(latinAndCJK_Wrapped_20_Indent_19)
        })
      })
    })
    describe(`it replaces the newline character if specified`, () => {
      it(`with only Latin alphabet text`, () => {
        expect(stringWrapCJK(latin_Input, { maxWidth: 40, newlineChar: '\r' })).toBe(latin_CarriageReturn_Wrapped_40)
      })
      it(`with a mixture of Latin text and CJK wide characters`, () => {
        expect(stringWrapCJK(latinAndCJK_Input, { maxWidth: 60, newlineChar: '\r' })).toBe(latinAndCJK_CarriageReturn_Wrapped_60)
      })
    })
    describe(`it maintains non-breaking spaces`, () => {
      it(`with a mixture of Latin text and CJK wide characters`, () => {
        expect(stringWrapCJK(latinAndCJKWithNBSP_Input, { maxWidth: 44 })).toBe(latinAndCJKWithNBSP_Wrapped_44)
      })
    })
    describe(`it normalizes whitespace when wrapping`, () => {
      it(`with only Latin alphabet text`, () => {
        expect(stringWrapCJK(latinWithExtraSpaces_Input, { maxWidth: 60, whitespaceNormalize: true })).toBe(latinWithExtraSpaces_Normalized_Wrapped_60)
      })
      describe(`with a mixture of Latin text and CJK wide characters`, () => {
        it(`without the presence of CJK wide spaces`, () => {
          expect(stringWrapCJK(latinAndCJKWithExtraSpaces_Input, { maxWidth: 60, whitespaceNormalize: true })).toBe(latinAndCJKWithExtraSpaces_Normalized_Wrapped_60)
        })
        it(`with the presence of CJK wide spaces`, () => {
          expect(stringWrapCJK(latinAndCJKWithExtraWideSpaces_Input, { maxWidth: 60, whitespaceNormalize: true, whitespaceMaintainWideSpace: true })).toBe(latinAndCJKWithExtraWideSpaces_Normalized_Wrapped_60)
        })
        it(`with the presence of CJK wide spaces that are not maintained`, () => {
          expect(stringWrapCJK(latinAndCJKWithExtraWideSpaces_Input, { maxWidth: 60, whitespaceNormalize: true, whitespaceMaintainWideSpace: false })).toBe(latinAndCJKWithExtraWideSpaces_Normalized_NoWhitespaceMaintainWideSpace_Wrapped_60)
        })
      })
      it(`with input that is longer than the maximum width`, () => {
        expect(stringWrapCJK(latinWithExtraSpaces_Input, { maxWidth: 10000, whitespaceNormalize: true })).toBe(latinWithExtraSpaces_Normalized)
      })
      it(`with maintenance of linebreaks if specified`, () => {
        expect(stringWrapCJK(latinAndCJKWithLinebreak_Input, { maxWidth: 79, whitespaceMaintainLinebreaks: false })).toBe(latinAndCJKWithLinebreak_NoWhitespaceMaintainLinebreaks_Wrapped_79)
        expect(stringWrapCJK(latinAndCJKWithLinebreak_Input, { maxWidth: 79, whitespaceMaintainLinebreaks: true })).toBe(latinAndCJKWithLinebreak_WhitespaceMaintainLinebreaks_Wrapped_79)
        expect(stringWrapCJK(latinAndCJKWithLinebreak_Input, { maxWidth: 80, whitespaceMaintainLinebreaks: true })).toBe(latinAndCJKWithLinebreak_WhitespaceMaintainLinebreaks_Wrapped_80)
        expect(stringWrapCJK(latinAndCJKWithLinebreak_Input, { maxWidth: 81, whitespaceMaintainLinebreaks: true })).toBe(latinAndCJKWithLinebreak_WhitespaceMaintainLinebreaks_Wrapped_81)
      })
    })
    describe(`it pads text to the full line width`, () => {
      it(`with only Latin alphabet text`, () => {
        expect(stringWrapCJK(latinWithExtraSpaces_Input, { maxWidth: 60, whitespaceNormalize: true, whitespaceChar: '-', padToMaxWidth: true })).toBe(latinWithExtraSpaces_Normalized_Padded_Wrapped_60)
        expect(stringWrapCJK(latinWithExtraSpaces_Input, { maxWidth: 60, whitespaceNormalize: false, whitespaceChar: '-', padToMaxWidth: true })).toBe(latinWithExtraSpaces_Padded_Wrapped_60)
      })
      it(`with a mixture of Latin text and CJK wide characters`, () => {
        expect(stringWrapCJK(latinAndCJK_Input, { maxWidth: 57, whitespaceChar: '-', padToMaxWidth: true })).toBe(latinAndCJK_Padded_Wrapped_57)
        expect(getLongestLine(latinAndCJK_Input, { maxWidth: 57, whitespaceChar: '-', padToMaxWidth: true })).toBeLessThanOrEqual(57)
        expect(stringWrapCJK(latinAndCJK_Input, { maxWidth: 58, whitespaceChar: '-', padToMaxWidth: true })).toBe(latinAndCJK_Padded_Wrapped_58)
        expect(getLongestLine(latinAndCJK_Input, { maxWidth: 58, whitespaceChar: '-', padToMaxWidth: true })).toBeLessThanOrEqual(58)
        expect(stringWrapCJK(latinAndCJK_Input, { maxWidth: 59, whitespaceChar: '-', padToMaxWidth: true })).toBe(latinAndCJK_Padded_Wrapped_59)
        expect(getLongestLine(latinAndCJK_Input, { maxWidth: 59, whitespaceChar: '-', padToMaxWidth: true })).toBeLessThanOrEqual(59)
        expect(stringWrapCJK(latinAndCJK_Input, { maxWidth: 60, whitespaceChar: '-', padToMaxWidth: true })).toBe(latinAndCJK_Padded_Wrapped_60)
        expect(getLongestLine(latinAndCJK_Input, { maxWidth: 60, whitespaceChar: '-', padToMaxWidth: true })).toBeLessThanOrEqual(60)
      })
    })
    describe(`it returns the original string when it is shorter than the maximum width`, () => {
      it(`with only Latin alphabet text`, () => {
        expect(stringWrapCJK(latin_Input, { maxWidth: 10000, whitespaceNormalize: false })).toBe(latin_Input)
      })
      it(`with a mixture of Latin text and CJK wide characters`, () => {
        expect(stringWrapCJK(latinAndCJK_Input, { maxWidth: 10000, whitespaceNormalize: false })).toBe(latinAndCJK_Input)
      })
    })
    describe(`it calculates line length using either visual width or string length`, () => {
      describe(`with a mixture of Latin text and CJK wide characters`, () => {
        it(`with visual width turned on`, () => {
          expect(stringWrapCJK(latinAndCJK_Input, { maxWidth: 50, useVisualWidth: true })).toBe(latinAndCJK_Wrapped_50)
        })
        it(`with visual width turned off`, () => {
          expect(stringWrapCJK(latinAndCJK_Input, { maxWidth: 50, useVisualWidth: false })).toBe(latinAndCJK_NoUseVisualWidth_Wrapped_50)
        })
      })
    })
    describe(`it makes use of the callback function if specified`, () => {
      describe(`with a mixture of Latin text and CJK wide characters`, () => {
        it(`with a callback that replaces lines and removes lines`, () => {
          expect(stringWrapCJK(latinAndCJK_Input, { maxWidth: 40, indentAmount: 10, lineCallback: lineCallbackTest })).toBe(latinAndCJK_CallbackTest1)
        })
        it(`with a callback that removes all lines`, () => {
          expect(stringWrapCJK(latinAndCJK_Input, { maxWidth: 40, indentAmount: 10, lineCallback: () => {} })).toBe(latinAndCJK_CallbackTest2)
        })
        it(`with a callback that replaces all lines`, () => {
          expect(stringWrapCJK(latinAndCJK_Input, { maxWidth: 40, indentAmount: 10, lineCallback: () => `a` })).toBe(latinAndCJK_CallbackTest3)
        })
      })
    })
    describe(`it correctly validates the passed options`, () => {
      it(`by throwing on error if 'throwOnError' is true`, () => {
        expect(() => stringWrapCJK(latinAndCJK_Input, { maxWidth: 0 })).toThrow()
        expect(() => stringWrapCJK(latinAndCJK_Input, { maxWidth: -5 })).toThrow()
        expect(() => stringWrapCJK(latinAndCJK_Input, { maxWidth: [] })).toThrow()
        expect(() => stringWrapCJK(latinAndCJK_Input, { maxWidth: 'a' })).toThrow()
        expect(() => stringWrapCJK(latinAndCJK_Input, { maxWidth: '10%' })).not.toThrow()
        expect(() => stringWrapCJK(latinAndCJK_Input, { maxWidth: 40, indentAmount: 10 })).not.toThrow()
        expect(() => stringWrapCJK(latinAndCJK_Input, { maxWidth: 40, indentAmount: 50 })).toThrow()
        expect(() => stringWrapCJK(latinAndCJK_Input, { maxWidth: 40, indentAmount: 40 })).toThrow()
        expect(() => stringWrapCJK(latinAndCJK_Input, { maxWidth: 40, indentAmount: 39 })).not.toThrow()
        expect(() => stringWrapCJK(latinAndCJK_Input, { indentChar: '' })).toThrow()
        expect(() => stringWrapCJK(latinAndCJK_Input, { indentChar: '=' })).not.toThrow()
        expect(() => stringWrapCJK(latinAndCJK_Input, { indentChar: 2 })).toThrow()
        expect(() => stringWrapCJK(latinAndCJK_Input, { whitespaceChar: null })).toThrow()
        expect(() => stringWrapCJK(latinAndCJK_Input, { whitespaceChar: 2 })).toThrow()
        expect(() => stringWrapCJK(latinAndCJK_Input, { newlineChar: 2 })).toThrow()
        expect(() => stringWrapCJK(latinAndCJK_Input, { newlineChar: null })).toThrow()
        expect(() => stringWrapCJK(latinAndCJK_Input, { indentType: 'a' })).toThrow()
        expect(() => stringWrapCJK(latinAndCJK_Input, { indentType: 'repeat' })).not.toThrow()
        expect(() => stringWrapCJK(latinAndCJK_Input, { indentType: 'crop' })).not.toThrow()
        expect(() => stringWrapCJK(latinAndCJK_Input, { lineCallback: 'a' })).toThrow()
        expect(() => stringWrapCJK(latinAndCJK_Input, { lineCallback: () => {} })).not.toThrow()
        expect(() => stringWrapCJK(latinAndCJK_Input, { lineCallback: () => `a` })).not.toThrow()
      })
      it(`by reverting to the defaults if 'throwOnError' is false`, () => {
        expect(stringWrapCJK(latinAndCJKWithLongWord_Input, { maxWidth: 10, indentAmount: 11, throwOnError: false })).toBe(latinAndCJK_ValidateTest1)
        
      })
    })
  })
})
