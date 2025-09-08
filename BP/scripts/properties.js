/**
 * scripts/properties から manifest.jsonを自動生成する
 * propertiesは、アドオン間通信においても、識別などに利用する
 */
/**
 * 文末に # が記述されている箇所を適宜修正して使用します。
 * Modify and use where # is written at the end of the sentence as appropriate
 */
export const properties = {
    id: "werewolf-entities", // a-z & 0-9 - _
    metadata: {
        /** 製作者の名前 */
        authors: [
        //"shizuku86"
        ]
    },
    header: {
        name: "Werewolf-Entities",
        description: "defines all entity data. Since entity definitions often conflict with other add-ons, this pack centralizes and manages all entities",
        version: {
            major: 1,
            minor: 0,
            patch: 0,
            // prerelease: "preview.1",
            // build: "abc123",
        },
        min_engine_version: [1, 21, 100],
        uuid: "fe256f06-40ba-4a6b-82a0-fc6b02fa96ed"
    },
    resourcepack: {
        name: "Use BP Name",
        description: "Use BP Description",
        uuid: "61b859e0-efe4-473c-9e00-d6df0acddf84",
        module_uuid: "17732f0a-f64a-4efe-9f2b-f14164c65a9b",
    },
    modules: [
        {
            type: "script",
            language: "javascript",
            entry: "scripts/index.js",
            version: "header.version",
            uuid: "b618ebc0-40c1-4d93-b333-4735ad82325c"
        }
    ],
    dependencies: [
        {
            module_name: "@minecraft/server",
            version: "2.1.0"
        },
        {
            module_name: "@minecraft/server-ui",
            version: "2.0.0"
        }
    ],
    /** 前提アドオン */
    requiredAddons: {
        "kairo": "1.0.0-dev.1" // "kairo": "1.0.0"
    },
    tags: [
    // "stable",
    ],
};
/**
 * "official" を非公式に付与することは許可されていません。
 * 公認のアドオンには "approved" を付与します。
 * It is not allowed to assign "official" unofficially.
 * For approved addons, assign "approved".
 *
 */
export const supportedTags = [
    "official",
    "approved",
    "stable",
    "experimental"
];
