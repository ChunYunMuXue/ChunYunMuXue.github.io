module.exports = {

"[project]/.next-internal/server/app/[slug]/page/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/src/lib/content.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getBibtexContent": (()=>getBibtexContent),
    "getMarkdownContent": (()=>getMarkdownContent),
    "getPageConfig": (()=>getPageConfig),
    "getTomlContent": (()=>getTomlContent)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$smol$2d$toml$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/smol-toml/dist/index.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$smol$2d$toml$2f$dist$2f$parse$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/smol-toml/dist/parse.js [app-rsc] (ecmascript)");
;
;
;
const DEFAULT_CONTENT_DIR = 'content';
function normalizeLocale(locale) {
    return locale.trim().replace('_', '-').toLowerCase();
}
function getCandidateFilePaths(filename, locale) {
    const candidates = [];
    if (locale) {
        candidates.push(__TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), `${DEFAULT_CONTENT_DIR}_${normalizeLocale(locale)}`, filename));
    }
    candidates.push(__TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), DEFAULT_CONTENT_DIR, filename));
    return candidates;
}
function readFirstAvailableFile(filename, locale) {
    const candidates = getCandidateFilePaths(filename, locale);
    for (const filePath of candidates){
        try {
            return __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readFileSync(filePath, 'utf-8');
        } catch (error) {
            if (error.code !== 'ENOENT') {
                console.error(`Error loading file ${filePath}:`, error);
            }
        }
    }
    if (locale) {
        console.warn(`Missing localized file \"${filename}\" for locale \"${locale}\", and no fallback found in content/.`);
    } else {
        console.warn(`Missing file \"${filename}\" in content/.`);
    }
    return '';
}
function getMarkdownContent(filename, locale) {
    return readFirstAvailableFile(filename, locale);
}
function getBibtexContent(filename, locale) {
    return readFirstAvailableFile(filename, locale);
}
function getTomlContent(filename, locale) {
    const content = readFirstAvailableFile(filename, locale);
    if (!content) {
        return null;
    }
    try {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$smol$2d$toml$2f$dist$2f$parse$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parse"])(content);
    } catch (error) {
        console.error(`Error parsing TOML file ${filename}:`, error);
        return null;
    }
}
function getPageConfig(pageName, locale) {
    return getTomlContent(`${pageName}.toml`, locale);
}
}}),
"[project]/src/lib/bibtexParser.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "parseBibTeX": (()=>parseBibTeX)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/config.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/i18n/config.ts [app-rsc] (ecmascript)");
;
;
// eslint-disable-next-line @typescript-eslint/no-require-imports
const bibtexParse = __turbopack_context__.r("[project]/node_modules/bibtex-parse-js/bibtexParse.js [app-rsc] (ecmascript)");
// Map BibTeX entry types to our publication types
const typeMapping = {
    article: 'journal',
    inproceedings: 'conference',
    conference: 'conference',
    incollection: 'book-chapter',
    book: 'book',
    phdthesis: 'thesis',
    mastersthesis: 'thesis',
    techreport: 'technical-report',
    unpublished: 'preprint',
    misc: 'preprint'
};
// Convert month names to numbers
const monthMapping = {
    jan: 1,
    january: 1,
    feb: 2,
    february: 2,
    mar: 3,
    march: 3,
    apr: 4,
    april: 4,
    may: 5,
    jun: 6,
    june: 6,
    jul: 7,
    july: 7,
    aug: 8,
    august: 8,
    sep: 9,
    september: 9,
    sept: 9,
    oct: 10,
    october: 10,
    nov: 11,
    november: 11,
    dec: 12,
    december: 12
};
function parseBibTeX(bibtexContent, locale) {
    const highlightNames = getHighlightNames(locale);
    const entries = bibtexParse.toJSON(bibtexContent);
    return entries.map((entry, index)=>{
        const tags = entry.entryTags;
        // Parse authors
        const authors = parseAuthors(tags.author || '', highlightNames);
        // Parse year and month
        const year = parseInt(tags.year) || new Date().getFullYear();
        const monthStr = tags.month?.toLowerCase() || '';
        const month = monthMapping[monthStr] || parseInt(monthStr) || undefined;
        // Determine type
        const type = typeMapping[entry.entryType.toLowerCase()] || 'journal';
        // Parse tags/keywords
        const keywords = tags.keywords?.split(',').map((k)=>k.trim()) || [];
        // Parse selected field (convert string to boolean)
        const selected = tags.selected === 'true' || tags.selected === 'yes';
        // Parse preview field (remove braces if present)
        const preview = tags.preview?.replace(/[{}]/g, '');
        // Create publication object
        const publication = {
            id: entry.citationKey || tags.id || `pub-${Date.now()}-${index}`,
            title: cleanBibTeXString(tags.title || 'Untitled'),
            authors,
            year,
            month: monthMapping[tags.month?.toLowerCase()] ? String(month) : tags.month,
            type,
            status: 'published',
            tags: keywords,
            keywords,
            researchArea: detectResearchArea(tags.title, keywords),
            // Optional fields
            journal: cleanBibTeXString(tags.journal),
            conference: cleanBibTeXString(tags.booktitle),
            volume: tags.volume,
            issue: tags.number,
            pages: tags.pages,
            doi: tags.doi,
            url: tags.url,
            code: tags.code,
            abstract: cleanBibTeXString(tags.abstract),
            description: cleanBibTeXString(tags.description || tags.note),
            selected,
            preview,
            // Store original BibTeX (excluding custom fields)
            bibtex: reconstructBibTeX(entry, [
                'selected',
                'preview',
                'description',
                'keywords',
                'code'
            ])
        };
        // Clean up undefined fields
        Object.keys(publication).forEach((key)=>{
            if (publication[key] === undefined) {
                delete publication[key];
            }
        });
        return publication;
    }).sort((a, b)=>{
        // Sort by year (descending), then by month if available
        if (b.year !== a.year) return b.year - a.year;
        // For month comparison, treat missing months as January (1) to ensure they appear last within the year
        const monthA = typeof a.month === 'string' ? monthMapping[a.month.toLowerCase()] || parseInt(a.month) || 1 : a.month || 1;
        const monthB = typeof b.month === 'string' ? monthMapping[b.month.toLowerCase()] || parseInt(b.month) || 1 : b.month || 1;
        // Sort by month descending (December to January)
        return monthB - monthA;
    });
}
function getHighlightNames(locale) {
    const names = new Set();
    const baseConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getConfig"])();
    const runtimeI18n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRuntimeI18nConfig"])(baseConfig.i18n);
    const addName = (name)=>{
        const cleaned = cleanBibTeXString(name).trim();
        if (cleaned) {
            names.add(cleaned);
        }
    };
    addName(baseConfig.author.name);
    if (runtimeI18n.enabled) {
        runtimeI18n.locales.forEach((localeCode)=>{
            const localizedConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getConfig"])(localeCode);
            addName(localizedConfig.author.name);
        });
    }
    if (locale) {
        const currentLocaleConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getConfig"])(locale);
        addName(currentLocaleConfig.author.name);
    }
    return Array.from(names);
}
function normalizePersonNameForMatch(name) {
    return name.toLowerCase().replace(/[\s.,'’`"()\-_/]/g, '');
}
function buildNameVariants(name) {
    const variants = new Set();
    const cleaned = cleanBibTeXString(name).toLowerCase().trim();
    if (!cleaned) {
        return variants;
    }
    variants.add(cleaned);
    const parts = cleaned.split(/\s+/).filter(Boolean);
    if (parts.length === 2) {
        variants.add(`${parts[1]} ${parts[0]}`);
    }
    return variants;
}
function parseAuthors(authorsStr, highlightNames) {
    if (!authorsStr) return [];
    const highlightTextCandidates = new Set();
    const highlightNormalizedCandidates = new Set();
    highlightNames.forEach((name)=>{
        const variants = buildNameVariants(name);
        variants.forEach((variant)=>{
            highlightTextCandidates.add(variant);
            highlightNormalizedCandidates.add(normalizePersonNameForMatch(variant));
        });
    });
    const highlightTextList = Array.from(highlightTextCandidates);
    const highlightNormalizedList = Array.from(highlightNormalizedCandidates);
    // Split by "and" and clean up
    return authorsStr.split(/\sand\s/).map((author)=>{
        // Clean up the author name
        let name = author.trim();
        // Check for corresponding author marker
        const isCorresponding = name.includes('*');
        // Check for co-author marker (#)
        const isCoAuthor = name.includes('#');
        // Remove special markers from name
        name = name.replace(/[*#]/g, '');
        // Handle "Last, First" format
        if (name.includes(',')) {
            const parts = name.split(',').map((p)=>p.trim());
            name = `${parts[1]} ${parts[0]}`;
        }
        name = cleanBibTeXString(name);
        // Check if this is the site owner (to highlight)
        const lowerName = name.toLowerCase();
        const normalizedName = normalizePersonNameForMatch(lowerName);
        const isHighlighted = highlightTextList.some((candidate)=>lowerName.includes(candidate)) || highlightNormalizedList.some((candidate)=>normalizedName.includes(candidate));
        return {
            name,
            isHighlighted,
            isCorresponding,
            isCoAuthor
        };
    }).filter((author)=>author.name);
}
function cleanBibTeXString(str) {
    if (!str) return '';
    // Remove outer quotes if present
    let cleaned = str.replace(/^["']|["']$/g, '');
    // Handle nested braces more carefully
    // First remove double braces {{content}} -> content
    cleaned = cleaned.replace(/\{\{([^}]*)\}\}/g, '$1');
    // Remove single braces {content} -> content, but be careful with nesting
    while(cleaned.includes('{') && cleaned.includes('}')){
        const beforeLength = cleaned.length;
        cleaned = cleaned.replace(/\{([^{}]*)\}/g, '$1');
        // If no change was made, break to avoid infinite loop
        if (cleaned.length === beforeLength) break;
    }
    // Remove any remaining single braces
    cleaned = cleaned.replace(/[{}]/g, '');
    // Handle LaTeX commands (basic)
    cleaned = cleaned.replace(/\\textbf{([^}]*)}/g, '$1');
    cleaned = cleaned.replace(/\\emph{([^}]*)}/g, '$1');
    cleaned = cleaned.replace(/\\cite{[^}]*}/g, '');
    cleaned = cleaned.replace(/~/g, ' ');
    // Remove remaining backslashes
    cleaned = cleaned.replace(/\\/g, '');
    // Remove extra spaces and newlines
    cleaned = cleaned.replace(/\s+/g, ' ').trim();
    return cleaned;
}
function detectResearchArea(title, keywords) {
    const text = (title + ' ' + keywords.join(' ')).toLowerCase();
    if (text.includes('healthcare') || text.includes('medical') || text.includes('health')) {
        return 'ai-healthcare';
    }
    if (text.includes('signal') || text.includes('processing')) {
        return 'signal-processing';
    }
    if (text.includes('reliability') || text.includes('fault') || text.includes('diagnosis')) {
        return 'reliability-engineering';
    }
    if (text.includes('quantum')) {
        return 'quantum-computing';
    }
    if (text.includes('neural') || text.includes('spiking')) {
        return 'neural-networks';
    }
    if (text.includes('transformer') || text.includes('attention')) {
        return 'transformer-architectures';
    }
    return 'machine-learning';
}
function reconstructBibTeX(entry, excludeFields = []) {
    const { entryType, citationKey, entryTags } = entry;
    let bibtex = `@${entryType}{${citationKey},\n`;
    Object.entries(entryTags).forEach(([key, value])=>{
        // Skip excluded fields
        if (!excludeFields.includes(key.toLowerCase())) {
            let cleanValue = value;
            // Clean author field by removing # and * symbols
            if (key.toLowerCase() === 'author') {
                cleanValue = value.replace(/[#*]/g, '');
            }
            bibtex += `  ${key} = {${cleanValue}},\n`;
        }
    });
    // Remove trailing comma and newline
    bibtex = bibtex.slice(0, -2) + '\n';
    bibtex += '}';
    return bibtex;
}
}}),
"[project]/src/components/pages/DynamicPageClient.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/pages/DynamicPageClient.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/pages/DynamicPageClient.tsx <module evaluation>", "default");
}}),
"[project]/src/components/pages/DynamicPageClient.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/pages/DynamicPageClient.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/pages/DynamicPageClient.tsx", "default");
}}),
"[project]/src/components/pages/DynamicPageClient.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pages$2f$DynamicPageClient$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/pages/DynamicPageClient.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pages$2f$DynamicPageClient$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/components/pages/DynamicPageClient.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pages$2f$DynamicPageClient$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/app/[slug]/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>DynamicPage),
    "generateMetadata": (()=>generateMetadata),
    "generateStaticParams": (()=>generateStaticParams)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/content.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/config.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$bibtexParser$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/bibtexParser.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pages$2f$DynamicPageClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/pages/DynamicPageClient.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/i18n/config.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
function loadDynamicPageData(slug, locale) {
    const pageConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPageConfig"])(slug, locale);
    if (!pageConfig) {
        return null;
    }
    if (pageConfig.type === 'publication') {
        const pubConfig = pageConfig;
        const bibtex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getBibtexContent"])(pubConfig.source, locale);
        return {
            type: 'publication',
            config: pubConfig,
            publications: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$bibtexParser$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseBibTeX"])(bibtex, locale)
        };
    }
    if (pageConfig.type === 'text') {
        const textConfig = pageConfig;
        const content = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getMarkdownContent"])(textConfig.source, locale);
        return {
            type: 'text',
            config: textConfig,
            content
        };
    }
    if (pageConfig.type === 'card') {
        return {
            type: 'card',
            config: pageConfig
        };
    }
    return null;
}
function generateStaticParams() {
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getConfig"])();
    return config.navigation.filter((nav)=>nav.type === 'page' && nav.target !== 'about').map((nav)=>({
            slug: nav.target
        }));
}
async function generateMetadata({ params }) {
    const { slug } = await params;
    const pageConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPageConfig"])(slug);
    if (!pageConfig) {
        return {};
    }
    return {
        title: pageConfig.title,
        description: pageConfig.description
    };
}
async function DynamicPage({ params }) {
    const { slug } = await params;
    const baseConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getConfig"])();
    const runtimeI18n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRuntimeI18nConfig"])(baseConfig.i18n);
    const targetLocales = runtimeI18n.enabled ? runtimeI18n.locales : [
        runtimeI18n.defaultLocale
    ];
    const dataByLocale = {};
    for (const locale of targetLocales){
        const localizedData = loadDynamicPageData(slug, locale);
        if (localizedData) {
            dataByLocale[locale] = localizedData;
        }
    }
    const defaultData = loadDynamicPageData(slug);
    if (defaultData) {
        dataByLocale[runtimeI18n.defaultLocale] = dataByLocale[runtimeI18n.defaultLocale] || defaultData;
    }
    if (Object.keys(dataByLocale).length === 0) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pages$2f$DynamicPageClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
        dataByLocale: dataByLocale,
        defaultLocale: runtimeI18n.defaultLocale
    }, void 0, false, {
        fileName: "[project]/src/app/[slug]/page.tsx",
        lineNumber: 101,
        columnNumber: 10
    }, this);
}
}}),
"[project]/src/app/[slug]/page.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/[slug]/page.tsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=_1e7b7560._.js.map