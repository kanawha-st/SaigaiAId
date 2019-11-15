export default [
    ["家屋被災", "", ["はい","いいえ"], "家が被災しましたか？"],
    ["損壊状況", "家屋被災=はい", ["全壊","半壊","一部損壊"], "被害の程度を選んでください。"],
    ["ローン", "家屋被災=はい", ["はい","いいえ"], "ローンは残っていますか？"],
    ["再建築", "損壊状況=全壊,損壊状況=半壊",["はい","いいえ"],"立て直し,または購入しますか？"],
    ["家屋補修","損壊状況=半壊/再建築=いいえ,損壊状況=一部損壊",["はい","いいえ"],"修理しますか？"],
    ["福祉世帯","家屋被災=はい",["はい","いいえ"],"低所得者世帯、障害者世帯、高齢者世帯に該当しますか？"],
    ["人的被害","",["はい","いいえ"],"人に被害はありましたか？"],
    ["世帯主怪我","人的被害=はい",["はい","いいえ"],"世帯主が療養期間おおむね一か月以上の怪我をしたということがありますか？"],
    ["見舞金","人的被害=はい",["はい","いいえ"],"災害によって負傷または病気になったり、重い後遺障害が残ったということはありますか？"],
    ["子供有無","",["はい","いいえ"],"お子さんはいらっしゃいますか？"],
    ["学用品","子供有無=はい",["はい","いいえ"],"教科書、学用品などを失いましたか？"],
    ["一人親","子供有無=はい",["はい","いいえ"],"一人親（20歳未満の子どもを扶養していて、配偶者がいない）に該当しますか？"],
    ["特別支援学校","子供有無=はい",["はい","いいえ"],"被災によって特別支援学校等への就学支援が必要になったということはありますか？"],
    ["就学資金","子供有無=はい",["はい","いいえ"],"小・中学校への就学資金が厳しくなったということはありますか？"],
    ["授業料","子供有無=はい",["はい","いいえ"],"大学や専門学校等の授業料支払いが厳しくなったということはありますか？"],
    ["生活費","",["はい","いいえ"],"税金や保険料、公共料金の支払いが難しいということはありますか？"],
    ["入院費","生活費=はい",["はい","いいえ"],"入院費用の負担が厳しい"],
    ["高齢融資","生活費=はい",["はい","いいえ"],"高齢だがお金を借りたいということはありますか？"]
];