var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// netlify/functions/node_modules/sitemap/dist/lib/errors.js
var require_errors = __commonJS({
  "netlify/functions/node_modules/sitemap/dist/lib/errors.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.EmptySitemap = exports2.EmptyStream = exports2.InvalidVideoPriceCurrency = exports2.InvalidVideoResolution = exports2.InvalidVideoPriceType = exports2.InvalidVideoRestrictionRelationship = exports2.InvalidVideoRestriction = exports2.InvalidVideoFamilyFriendly = exports2.InvalidVideoCategory = exports2.InvalidVideoTagCount = exports2.InvalidVideoViewCount = exports2.InvalidVideoTitle = exports2.XMLLintUnavailable = exports2.InvalidNewsAccessValue = exports2.InvalidNewsFormat = exports2.InvalidAttr = exports2.InvalidAttrValue = exports2.InvalidVideoRating = exports2.InvalidVideoDescription = exports2.InvalidVideoDuration = exports2.InvalidVideoFormat = exports2.UndefinedTargetFolder = exports2.PriorityInvalidError = exports2.ChangeFreqInvalidError = exports2.NoConfigError = exports2.NoURLError = void 0;
    var NoURLError = class _NoURLError extends Error {
      constructor(message) {
        super(message || "URL is required");
        this.name = "NoURLError";
        Error.captureStackTrace(this, _NoURLError);
      }
    };
    exports2.NoURLError = NoURLError;
    var NoConfigError = class _NoConfigError extends Error {
      constructor(message) {
        super(message || "SitemapItem requires a configuration");
        this.name = "NoConfigError";
        Error.captureStackTrace(this, _NoConfigError);
      }
    };
    exports2.NoConfigError = NoConfigError;
    var ChangeFreqInvalidError = class _ChangeFreqInvalidError extends Error {
      constructor(url, changefreq) {
        super(`${url}: changefreq "${changefreq}" is invalid`);
        this.name = "ChangeFreqInvalidError";
        Error.captureStackTrace(this, _ChangeFreqInvalidError);
      }
    };
    exports2.ChangeFreqInvalidError = ChangeFreqInvalidError;
    var PriorityInvalidError = class _PriorityInvalidError extends Error {
      constructor(url, priority) {
        super(`${url}: priority "${priority}" must be a number between 0 and 1 inclusive`);
        this.name = "PriorityInvalidError";
        Error.captureStackTrace(this, _PriorityInvalidError);
      }
    };
    exports2.PriorityInvalidError = PriorityInvalidError;
    var UndefinedTargetFolder = class _UndefinedTargetFolder extends Error {
      constructor(message) {
        super(message || "Target folder must exist");
        this.name = "UndefinedTargetFolder";
        Error.captureStackTrace(this, _UndefinedTargetFolder);
      }
    };
    exports2.UndefinedTargetFolder = UndefinedTargetFolder;
    var InvalidVideoFormat = class _InvalidVideoFormat extends Error {
      constructor(url) {
        super(`${url} video must include thumbnail_loc, title and description fields for videos`);
        this.name = "InvalidVideoFormat";
        Error.captureStackTrace(this, _InvalidVideoFormat);
      }
    };
    exports2.InvalidVideoFormat = InvalidVideoFormat;
    var InvalidVideoDuration = class _InvalidVideoDuration extends Error {
      constructor(url, duration) {
        super(`${url} duration "${duration}" must be an integer of seconds between 0 and 28800`);
        this.name = "InvalidVideoDuration";
        Error.captureStackTrace(this, _InvalidVideoDuration);
      }
    };
    exports2.InvalidVideoDuration = InvalidVideoDuration;
    var InvalidVideoDescription = class _InvalidVideoDescription extends Error {
      constructor(url, length) {
        const message = `${url}: video description is too long ${length} vs limit of 2048 characters.`;
        super(message);
        this.name = "InvalidVideoDescription";
        Error.captureStackTrace(this, _InvalidVideoDescription);
      }
    };
    exports2.InvalidVideoDescription = InvalidVideoDescription;
    var InvalidVideoRating = class _InvalidVideoRating extends Error {
      constructor(url, title, rating) {
        super(`${url}: video "${title}" rating "${rating}" must be between 0 and 5 inclusive`);
        this.name = "InvalidVideoRating";
        Error.captureStackTrace(this, _InvalidVideoRating);
      }
    };
    exports2.InvalidVideoRating = InvalidVideoRating;
    var InvalidAttrValue = class _InvalidAttrValue extends Error {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      constructor(key, val, validator) {
        super('"' + val + '" tested against: ' + validator + ' is not a valid value for attr: "' + key + '"');
        this.name = "InvalidAttrValue";
        Error.captureStackTrace(this, _InvalidAttrValue);
      }
    };
    exports2.InvalidAttrValue = InvalidAttrValue;
    var InvalidAttr = class _InvalidAttr extends Error {
      constructor(key) {
        super('"' + key + '" is malformed');
        this.name = "InvalidAttr";
        Error.captureStackTrace(this, _InvalidAttr);
      }
    };
    exports2.InvalidAttr = InvalidAttr;
    var InvalidNewsFormat = class _InvalidNewsFormat extends Error {
      constructor(url) {
        super(`${url} News must include publication, publication name, publication language, title, and publication_date for news`);
        this.name = "InvalidNewsFormat";
        Error.captureStackTrace(this, _InvalidNewsFormat);
      }
    };
    exports2.InvalidNewsFormat = InvalidNewsFormat;
    var InvalidNewsAccessValue = class _InvalidNewsAccessValue extends Error {
      constructor(url, access) {
        super(`${url} News access "${access}" must be either Registration, Subscription or not be present`);
        this.name = "InvalidNewsAccessValue";
        Error.captureStackTrace(this, _InvalidNewsAccessValue);
      }
    };
    exports2.InvalidNewsAccessValue = InvalidNewsAccessValue;
    var XMLLintUnavailable = class _XMLLintUnavailable extends Error {
      constructor(message) {
        super(message || "xmlLint is not installed. XMLLint is required to validate");
        this.name = "XMLLintUnavailable";
        Error.captureStackTrace(this, _XMLLintUnavailable);
      }
    };
    exports2.XMLLintUnavailable = XMLLintUnavailable;
    var InvalidVideoTitle = class _InvalidVideoTitle extends Error {
      constructor(url, length) {
        super(`${url}: video title is too long ${length} vs 100 character limit`);
        this.name = "InvalidVideoTitle";
        Error.captureStackTrace(this, _InvalidVideoTitle);
      }
    };
    exports2.InvalidVideoTitle = InvalidVideoTitle;
    var InvalidVideoViewCount = class _InvalidVideoViewCount extends Error {
      constructor(url, count) {
        super(`${url}: video view count must be positive, view count was ${count}`);
        this.name = "InvalidVideoViewCount";
        Error.captureStackTrace(this, _InvalidVideoViewCount);
      }
    };
    exports2.InvalidVideoViewCount = InvalidVideoViewCount;
    var InvalidVideoTagCount = class _InvalidVideoTagCount extends Error {
      constructor(url, count) {
        super(`${url}: video can have no more than 32 tags, this has ${count}`);
        this.name = "InvalidVideoTagCount";
        Error.captureStackTrace(this, _InvalidVideoTagCount);
      }
    };
    exports2.InvalidVideoTagCount = InvalidVideoTagCount;
    var InvalidVideoCategory = class _InvalidVideoCategory extends Error {
      constructor(url, count) {
        super(`${url}: video category can only be 256 characters but was passed ${count}`);
        this.name = "InvalidVideoCategory";
        Error.captureStackTrace(this, _InvalidVideoCategory);
      }
    };
    exports2.InvalidVideoCategory = InvalidVideoCategory;
    var InvalidVideoFamilyFriendly = class _InvalidVideoFamilyFriendly extends Error {
      constructor(url, fam) {
        super(`${url}: video family friendly must be yes or no, was passed "${fam}"`);
        this.name = "InvalidVideoFamilyFriendly";
        Error.captureStackTrace(this, _InvalidVideoFamilyFriendly);
      }
    };
    exports2.InvalidVideoFamilyFriendly = InvalidVideoFamilyFriendly;
    var InvalidVideoRestriction = class _InvalidVideoRestriction extends Error {
      constructor(url, code) {
        super(`${url}: video restriction must be one or more two letter country codes. Was passed "${code}"`);
        this.name = "InvalidVideoRestriction";
        Error.captureStackTrace(this, _InvalidVideoRestriction);
      }
    };
    exports2.InvalidVideoRestriction = InvalidVideoRestriction;
    var InvalidVideoRestrictionRelationship = class _InvalidVideoRestrictionRelationship extends Error {
      constructor(url, val) {
        super(`${url}: video restriction relationship must be either allow or deny. Was passed "${val}"`);
        this.name = "InvalidVideoRestrictionRelationship";
        Error.captureStackTrace(this, _InvalidVideoRestrictionRelationship);
      }
    };
    exports2.InvalidVideoRestrictionRelationship = InvalidVideoRestrictionRelationship;
    var InvalidVideoPriceType = class _InvalidVideoPriceType extends Error {
      constructor(url, priceType, price) {
        super(priceType === void 0 && price === "" ? `${url}: video priceType is required when price is not provided` : `${url}: video price type "${priceType}" is not "rent" or "purchase"`);
        this.name = "InvalidVideoPriceType";
        Error.captureStackTrace(this, _InvalidVideoPriceType);
      }
    };
    exports2.InvalidVideoPriceType = InvalidVideoPriceType;
    var InvalidVideoResolution = class _InvalidVideoResolution extends Error {
      constructor(url, resolution) {
        super(`${url}: video price resolution "${resolution}" is not hd or sd`);
        this.name = "InvalidVideoResolution";
        Error.captureStackTrace(this, _InvalidVideoResolution);
      }
    };
    exports2.InvalidVideoResolution = InvalidVideoResolution;
    var InvalidVideoPriceCurrency = class _InvalidVideoPriceCurrency extends Error {
      constructor(url, currency) {
        super(`${url}: video price currency "${currency}" must be a three capital letter abbrieviation for the country currency`);
        this.name = "InvalidVideoPriceCurrency";
        Error.captureStackTrace(this, _InvalidVideoPriceCurrency);
      }
    };
    exports2.InvalidVideoPriceCurrency = InvalidVideoPriceCurrency;
    var EmptyStream = class _EmptyStream extends Error {
      constructor() {
        super("You have ended the stream before anything was written. streamToPromise MUST be called before ending the stream.");
        this.name = "EmptyStream";
        Error.captureStackTrace(this, _EmptyStream);
      }
    };
    exports2.EmptyStream = EmptyStream;
    var EmptySitemap = class extends Error {
      constructor() {
        super("You ended the stream without writing anything.");
        this.name = "EmptySitemap";
        Error.captureStackTrace(this, EmptyStream);
      }
    };
    exports2.EmptySitemap = EmptySitemap;
  }
});

// netlify/functions/node_modules/sitemap/dist/lib/types.js
var require_types = __commonJS({
  "netlify/functions/node_modules/sitemap/dist/lib/types.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.IndexTagNames = exports2.TagNames = exports2.ErrorLevel = exports2.isAllowDeny = exports2.EnumAllowDeny = exports2.isValidYesNo = exports2.EnumYesNo = exports2.isValidChangeFreq = exports2.CHANGEFREQ = exports2.isResolution = exports2.isPriceType = exports2.validators = exports2.EnumChangefreq = void 0;
    var EnumChangefreq;
    (function(EnumChangefreq2) {
      EnumChangefreq2["DAILY"] = "daily";
      EnumChangefreq2["MONTHLY"] = "monthly";
      EnumChangefreq2["ALWAYS"] = "always";
      EnumChangefreq2["HOURLY"] = "hourly";
      EnumChangefreq2["WEEKLY"] = "weekly";
      EnumChangefreq2["YEARLY"] = "yearly";
      EnumChangefreq2["NEVER"] = "never";
    })(EnumChangefreq = exports2.EnumChangefreq || (exports2.EnumChangefreq = {}));
    var allowDeny = /^(?:allow|deny)$/;
    exports2.validators = {
      "price:currency": /^[A-Z]{3}$/,
      "price:type": /^(?:rent|purchase|RENT|PURCHASE)$/,
      "price:resolution": /^(?:HD|hd|sd|SD)$/,
      "platform:relationship": allowDeny,
      "restriction:relationship": allowDeny,
      restriction: /^([A-Z]{2}( +[A-Z]{2})*)?$/,
      platform: /^((web|mobile|tv)( (web|mobile|tv))*)?$/,
      language: /^zh-cn|zh-tw|([a-z]{2,3})$/,
      genres: /^(PressRelease|Satire|Blog|OpEd|Opinion|UserGenerated)(, *(PressRelease|Satire|Blog|OpEd|Opinion|UserGenerated))*$/,
      stock_tickers: /^(\w+:\w+(, *\w+:\w+){0,4})?$/
    };
    function isPriceType(pt) {
      return exports2.validators["price:type"].test(pt);
    }
    exports2.isPriceType = isPriceType;
    function isResolution(res) {
      return exports2.validators["price:resolution"].test(res);
    }
    exports2.isResolution = isResolution;
    exports2.CHANGEFREQ = Object.values(EnumChangefreq);
    function isValidChangeFreq(freq) {
      return exports2.CHANGEFREQ.includes(freq);
    }
    exports2.isValidChangeFreq = isValidChangeFreq;
    var EnumYesNo;
    (function(EnumYesNo2) {
      EnumYesNo2["YES"] = "YES";
      EnumYesNo2["NO"] = "NO";
      EnumYesNo2["Yes"] = "Yes";
      EnumYesNo2["No"] = "No";
      EnumYesNo2["yes"] = "yes";
      EnumYesNo2["no"] = "no";
    })(EnumYesNo = exports2.EnumYesNo || (exports2.EnumYesNo = {}));
    function isValidYesNo(yn) {
      return /^YES|NO|[Yy]es|[Nn]o$/.test(yn);
    }
    exports2.isValidYesNo = isValidYesNo;
    var EnumAllowDeny;
    (function(EnumAllowDeny2) {
      EnumAllowDeny2["ALLOW"] = "allow";
      EnumAllowDeny2["DENY"] = "deny";
    })(EnumAllowDeny = exports2.EnumAllowDeny || (exports2.EnumAllowDeny = {}));
    function isAllowDeny(ad) {
      return allowDeny.test(ad);
    }
    exports2.isAllowDeny = isAllowDeny;
    var ErrorLevel;
    (function(ErrorLevel2) {
      ErrorLevel2["SILENT"] = "silent";
      ErrorLevel2["WARN"] = "warn";
      ErrorLevel2["THROW"] = "throw";
    })(ErrorLevel = exports2.ErrorLevel || (exports2.ErrorLevel = {}));
    var TagNames;
    (function(TagNames2) {
      TagNames2["url"] = "url";
      TagNames2["loc"] = "loc";
      TagNames2["urlset"] = "urlset";
      TagNames2["lastmod"] = "lastmod";
      TagNames2["changefreq"] = "changefreq";
      TagNames2["priority"] = "priority";
      TagNames2["video:thumbnail_loc"] = "video:thumbnail_loc";
      TagNames2["video:video"] = "video:video";
      TagNames2["video:title"] = "video:title";
      TagNames2["video:description"] = "video:description";
      TagNames2["video:tag"] = "video:tag";
      TagNames2["video:duration"] = "video:duration";
      TagNames2["video:player_loc"] = "video:player_loc";
      TagNames2["video:content_loc"] = "video:content_loc";
      TagNames2["image:image"] = "image:image";
      TagNames2["image:loc"] = "image:loc";
      TagNames2["image:geo_location"] = "image:geo_location";
      TagNames2["image:license"] = "image:license";
      TagNames2["image:title"] = "image:title";
      TagNames2["image:caption"] = "image:caption";
      TagNames2["video:requires_subscription"] = "video:requires_subscription";
      TagNames2["video:publication_date"] = "video:publication_date";
      TagNames2["video:id"] = "video:id";
      TagNames2["video:restriction"] = "video:restriction";
      TagNames2["video:family_friendly"] = "video:family_friendly";
      TagNames2["video:view_count"] = "video:view_count";
      TagNames2["video:uploader"] = "video:uploader";
      TagNames2["video:expiration_date"] = "video:expiration_date";
      TagNames2["video:platform"] = "video:platform";
      TagNames2["video:price"] = "video:price";
      TagNames2["video:rating"] = "video:rating";
      TagNames2["video:category"] = "video:category";
      TagNames2["video:live"] = "video:live";
      TagNames2["video:gallery_loc"] = "video:gallery_loc";
      TagNames2["news:news"] = "news:news";
      TagNames2["news:publication"] = "news:publication";
      TagNames2["news:name"] = "news:name";
      TagNames2["news:access"] = "news:access";
      TagNames2["news:genres"] = "news:genres";
      TagNames2["news:publication_date"] = "news:publication_date";
      TagNames2["news:title"] = "news:title";
      TagNames2["news:keywords"] = "news:keywords";
      TagNames2["news:stock_tickers"] = "news:stock_tickers";
      TagNames2["news:language"] = "news:language";
      TagNames2["mobile:mobile"] = "mobile:mobile";
      TagNames2["xhtml:link"] = "xhtml:link";
      TagNames2["expires"] = "expires";
    })(TagNames = exports2.TagNames || (exports2.TagNames = {}));
    var IndexTagNames;
    (function(IndexTagNames2) {
      IndexTagNames2["sitemap"] = "sitemap";
      IndexTagNames2["sitemapindex"] = "sitemapindex";
      IndexTagNames2["loc"] = "loc";
      IndexTagNames2["lastmod"] = "lastmod";
    })(IndexTagNames = exports2.IndexTagNames || (exports2.IndexTagNames = {}));
  }
});

// netlify/functions/node_modules/sitemap/dist/lib/sitemap-xml.js
var require_sitemap_xml = __commonJS({
  "netlify/functions/node_modules/sitemap/dist/lib/sitemap-xml.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.element = exports2.ctag = exports2.otag = exports2.text = void 0;
    var invalidXMLUnicodeRegex = (
      // eslint-disable-next-line no-control-regex
      /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F-\u0084\u0086-\u009F\uD800-\uDFFF\uFDD0-\uFDDF\u{1FFFE}-\u{1FFFF}\u{2FFFE}-\u{2FFFF}\u{3FFFE}-\u{3FFFF}\u{4FFFE}-\u{4FFFF}\u{5FFFE}-\u{5FFFF}\u{6FFFE}-\u{6FFFF}\u{7FFFE}-\u{7FFFF}\u{8FFFE}-\u{8FFFF}\u{9FFFE}-\u{9FFFF}\u{AFFFE}-\u{AFFFF}\u{BFFFE}-\u{BFFFF}\u{CFFFE}-\u{CFFFF}\u{DFFFE}-\u{DFFFF}\u{EFFFE}-\u{EFFFF}\u{FFFFE}-\u{FFFFF}\u{10FFFE}-\u{10FFFF}]/gu
    );
    var amp = /&/g;
    var lt = /</g;
    var apos = /'/g;
    var quot = /"/g;
    function text(txt) {
      return txt.replace(amp, "&amp;").replace(lt, "&lt;").replace(invalidXMLUnicodeRegex, "");
    }
    exports2.text = text;
    function otag(nodeName, attrs, selfClose = false) {
      let attrstr = "";
      for (const k in attrs) {
        const val = attrs[k].replace(amp, "&amp;").replace(lt, "&lt;").replace(apos, "&apos;").replace(quot, "&quot;").replace(invalidXMLUnicodeRegex, "");
        attrstr += ` ${k}="${val}"`;
      }
      return `<${nodeName}${attrstr}${selfClose ? "/" : ""}>`;
    }
    exports2.otag = otag;
    function ctag(nodeName) {
      return `</${nodeName}>`;
    }
    exports2.ctag = ctag;
    function element(nodeName, attrs, innerText) {
      if (typeof attrs === "string") {
        return otag(nodeName) + text(attrs) + ctag(nodeName);
      } else if (innerText) {
        return otag(nodeName, attrs) + text(innerText) + ctag(nodeName);
      } else {
        return otag(nodeName, attrs, true);
      }
    }
    exports2.element = element;
  }
});

// netlify/functions/node_modules/sitemap/dist/lib/sitemap-item-stream.js
var require_sitemap_item_stream = __commonJS({
  "netlify/functions/node_modules/sitemap/dist/lib/sitemap-item-stream.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.SitemapItemStream = void 0;
    var stream_1 = require("stream");
    var errors_1 = require_errors();
    var types_1 = require_types();
    var sitemap_xml_1 = require_sitemap_xml();
    function attrBuilder(conf, keys) {
      if (typeof keys === "string") {
        keys = [keys];
      }
      const iv = {};
      return keys.reduce((attrs, key) => {
        if (conf[key] !== void 0) {
          const keyAr = key.split(":");
          if (keyAr.length !== 2) {
            throw new errors_1.InvalidAttr(key);
          }
          attrs[keyAr[1]] = conf[key];
        }
        return attrs;
      }, iv);
    }
    var SitemapItemStream = class extends stream_1.Transform {
      constructor(opts = { level: types_1.ErrorLevel.WARN }) {
        opts.objectMode = true;
        super(opts);
        this.level = opts.level || types_1.ErrorLevel.WARN;
      }
      _transform(item, encoding, callback) {
        this.push((0, sitemap_xml_1.otag)(types_1.TagNames.url));
        this.push((0, sitemap_xml_1.element)(types_1.TagNames.loc, item.url));
        if (item.lastmod) {
          this.push((0, sitemap_xml_1.element)(types_1.TagNames.lastmod, item.lastmod));
        }
        if (item.changefreq) {
          this.push((0, sitemap_xml_1.element)(types_1.TagNames.changefreq, item.changefreq));
        }
        if (item.priority !== void 0 && item.priority !== null) {
          if (item.fullPrecisionPriority) {
            this.push((0, sitemap_xml_1.element)(types_1.TagNames.priority, item.priority.toString()));
          } else {
            this.push((0, sitemap_xml_1.element)(types_1.TagNames.priority, item.priority.toFixed(1)));
          }
        }
        item.video.forEach((video) => {
          this.push((0, sitemap_xml_1.otag)(types_1.TagNames["video:video"]));
          this.push((0, sitemap_xml_1.element)(types_1.TagNames["video:thumbnail_loc"], video.thumbnail_loc));
          this.push((0, sitemap_xml_1.element)(types_1.TagNames["video:title"], video.title));
          this.push((0, sitemap_xml_1.element)(types_1.TagNames["video:description"], video.description));
          if (video.content_loc) {
            this.push((0, sitemap_xml_1.element)(types_1.TagNames["video:content_loc"], video.content_loc));
          }
          if (video.player_loc) {
            this.push((0, sitemap_xml_1.element)(types_1.TagNames["video:player_loc"], attrBuilder(video, [
              "player_loc:autoplay",
              "player_loc:allow_embed"
            ]), video.player_loc));
          }
          if (video.duration) {
            this.push((0, sitemap_xml_1.element)(types_1.TagNames["video:duration"], video.duration.toString()));
          }
          if (video.expiration_date) {
            this.push((0, sitemap_xml_1.element)(types_1.TagNames["video:expiration_date"], video.expiration_date));
          }
          if (video.rating !== void 0) {
            this.push((0, sitemap_xml_1.element)(types_1.TagNames["video:rating"], video.rating.toString()));
          }
          if (video.view_count !== void 0) {
            this.push((0, sitemap_xml_1.element)(types_1.TagNames["video:view_count"], video.view_count.toString()));
          }
          if (video.publication_date) {
            this.push((0, sitemap_xml_1.element)(types_1.TagNames["video:publication_date"], video.publication_date));
          }
          for (const tag of video.tag) {
            this.push((0, sitemap_xml_1.element)(types_1.TagNames["video:tag"], tag));
          }
          if (video.category) {
            this.push((0, sitemap_xml_1.element)(types_1.TagNames["video:category"], video.category));
          }
          if (video.family_friendly) {
            this.push((0, sitemap_xml_1.element)(types_1.TagNames["video:family_friendly"], video.family_friendly));
          }
          if (video.restriction) {
            this.push((0, sitemap_xml_1.element)(types_1.TagNames["video:restriction"], attrBuilder(video, "restriction:relationship"), video.restriction));
          }
          if (video.gallery_loc) {
            this.push((0, sitemap_xml_1.element)(types_1.TagNames["video:gallery_loc"], { title: video["gallery_loc:title"] }, video.gallery_loc));
          }
          if (video.price) {
            this.push((0, sitemap_xml_1.element)(types_1.TagNames["video:price"], attrBuilder(video, [
              "price:resolution",
              "price:currency",
              "price:type"
            ]), video.price));
          }
          if (video.requires_subscription) {
            this.push((0, sitemap_xml_1.element)(types_1.TagNames["video:requires_subscription"], video.requires_subscription));
          }
          if (video.uploader) {
            this.push((0, sitemap_xml_1.element)(types_1.TagNames["video:uploader"], attrBuilder(video, "uploader:info"), video.uploader));
          }
          if (video.platform) {
            this.push((0, sitemap_xml_1.element)(types_1.TagNames["video:platform"], attrBuilder(video, "platform:relationship"), video.platform));
          }
          if (video.live) {
            this.push((0, sitemap_xml_1.element)(types_1.TagNames["video:live"], video.live));
          }
          if (video.id) {
            this.push((0, sitemap_xml_1.element)(types_1.TagNames["video:id"], { type: "url" }, video.id));
          }
          this.push((0, sitemap_xml_1.ctag)(types_1.TagNames["video:video"]));
        });
        item.links.forEach((link) => {
          this.push((0, sitemap_xml_1.element)(types_1.TagNames["xhtml:link"], {
            rel: "alternate",
            hreflang: link.lang || link.hreflang,
            href: link.url
          }));
        });
        if (item.expires) {
          this.push((0, sitemap_xml_1.element)(types_1.TagNames.expires, new Date(item.expires).toISOString()));
        }
        if (item.androidLink) {
          this.push((0, sitemap_xml_1.element)(types_1.TagNames["xhtml:link"], {
            rel: "alternate",
            href: item.androidLink
          }));
        }
        if (item.ampLink) {
          this.push((0, sitemap_xml_1.element)(types_1.TagNames["xhtml:link"], {
            rel: "amphtml",
            href: item.ampLink
          }));
        }
        if (item.news) {
          this.push((0, sitemap_xml_1.otag)(types_1.TagNames["news:news"]));
          this.push((0, sitemap_xml_1.otag)(types_1.TagNames["news:publication"]));
          this.push((0, sitemap_xml_1.element)(types_1.TagNames["news:name"], item.news.publication.name));
          this.push((0, sitemap_xml_1.element)(types_1.TagNames["news:language"], item.news.publication.language));
          this.push((0, sitemap_xml_1.ctag)(types_1.TagNames["news:publication"]));
          if (item.news.access) {
            this.push((0, sitemap_xml_1.element)(types_1.TagNames["news:access"], item.news.access));
          }
          if (item.news.genres) {
            this.push((0, sitemap_xml_1.element)(types_1.TagNames["news:genres"], item.news.genres));
          }
          this.push((0, sitemap_xml_1.element)(types_1.TagNames["news:publication_date"], item.news.publication_date));
          this.push((0, sitemap_xml_1.element)(types_1.TagNames["news:title"], item.news.title));
          if (item.news.keywords) {
            this.push((0, sitemap_xml_1.element)(types_1.TagNames["news:keywords"], item.news.keywords));
          }
          if (item.news.stock_tickers) {
            this.push((0, sitemap_xml_1.element)(types_1.TagNames["news:stock_tickers"], item.news.stock_tickers));
          }
          this.push((0, sitemap_xml_1.ctag)(types_1.TagNames["news:news"]));
        }
        item.img.forEach((image) => {
          this.push((0, sitemap_xml_1.otag)(types_1.TagNames["image:image"]));
          this.push((0, sitemap_xml_1.element)(types_1.TagNames["image:loc"], image.url));
          if (image.caption) {
            this.push((0, sitemap_xml_1.element)(types_1.TagNames["image:caption"], image.caption));
          }
          if (image.geoLocation) {
            this.push((0, sitemap_xml_1.element)(types_1.TagNames["image:geo_location"], image.geoLocation));
          }
          if (image.title) {
            this.push((0, sitemap_xml_1.element)(types_1.TagNames["image:title"], image.title));
          }
          if (image.license) {
            this.push((0, sitemap_xml_1.element)(types_1.TagNames["image:license"], image.license));
          }
          this.push((0, sitemap_xml_1.ctag)(types_1.TagNames["image:image"]));
        });
        this.push((0, sitemap_xml_1.ctag)(types_1.TagNames.url));
        callback();
      }
    };
    exports2.SitemapItemStream = SitemapItemStream;
  }
});

// netlify/functions/node_modules/sitemap/dist/lib/utils.js
var require_utils = __commonJS({
  "netlify/functions/node_modules/sitemap/dist/lib/utils.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.normalizeURL = exports2.chunk = exports2.lineSeparatedURLsToSitemapOptions = exports2.ReadlineStream = exports2.mergeStreams = exports2.validateSMIOptions = void 0;
    var fs_1 = require("fs");
    var stream_1 = require("stream");
    var readline_1 = require("readline");
    var url_1 = require("url");
    var types_1 = require_types();
    var errors_1 = require_errors();
    var types_2 = require_types();
    function validate(subject, name, url, level) {
      Object.keys(subject).forEach((key) => {
        const val = subject[key];
        if (types_2.validators[key] && !types_2.validators[key].test(val)) {
          if (level === types_1.ErrorLevel.THROW) {
            throw new errors_1.InvalidAttrValue(key, val, types_2.validators[key]);
          } else {
            console.warn(`${url}: ${name} key ${key} has invalid value: ${val}`);
          }
        }
      });
    }
    function handleError(error, level) {
      if (level === types_1.ErrorLevel.THROW) {
        throw error;
      } else if (level === types_1.ErrorLevel.WARN) {
        console.warn(error.name, error.message);
      }
    }
    function validateSMIOptions(conf, level = types_1.ErrorLevel.WARN, errorHandler = handleError) {
      if (!conf) {
        throw new errors_1.NoConfigError();
      }
      if (level === types_1.ErrorLevel.SILENT) {
        return conf;
      }
      const { url, changefreq, priority, news, video } = conf;
      if (!url) {
        errorHandler(new errors_1.NoURLError(), level);
      }
      if (changefreq) {
        if (!(0, types_1.isValidChangeFreq)(changefreq)) {
          errorHandler(new errors_1.ChangeFreqInvalidError(url, changefreq), level);
        }
      }
      if (priority) {
        if (!(priority >= 0 && priority <= 1)) {
          errorHandler(new errors_1.PriorityInvalidError(url, priority), level);
        }
      }
      if (news) {
        if (news.access && news.access !== "Registration" && news.access !== "Subscription") {
          errorHandler(new errors_1.InvalidNewsAccessValue(url, news.access), level);
        }
        if (!news.publication || !news.publication.name || !news.publication.language || !news.publication_date || !news.title) {
          errorHandler(new errors_1.InvalidNewsFormat(url), level);
        }
        validate(news, "news", url, level);
        validate(news.publication, "publication", url, level);
      }
      if (video) {
        video.forEach((vid) => {
          var _a;
          if (vid.duration !== void 0) {
            if (vid.duration < 0 || vid.duration > 28800) {
              errorHandler(new errors_1.InvalidVideoDuration(url, vid.duration), level);
            }
          }
          if (vid.rating !== void 0 && (vid.rating < 0 || vid.rating > 5)) {
            errorHandler(new errors_1.InvalidVideoRating(url, vid.title, vid.rating), level);
          }
          if (typeof vid !== "object" || !vid.thumbnail_loc || !vid.title || !vid.description) {
            errorHandler(new errors_1.InvalidVideoFormat(url), level);
          }
          if (vid.title.length > 100) {
            errorHandler(new errors_1.InvalidVideoTitle(url, vid.title.length), level);
          }
          if (vid.description.length > 2048) {
            errorHandler(new errors_1.InvalidVideoDescription(url, vid.description.length), level);
          }
          if (vid.view_count !== void 0 && vid.view_count < 0) {
            errorHandler(new errors_1.InvalidVideoViewCount(url, vid.view_count), level);
          }
          if (vid.tag.length > 32) {
            errorHandler(new errors_1.InvalidVideoTagCount(url, vid.tag.length), level);
          }
          if (vid.category !== void 0 && ((_a = vid.category) === null || _a === void 0 ? void 0 : _a.length) > 256) {
            errorHandler(new errors_1.InvalidVideoCategory(url, vid.category.length), level);
          }
          if (vid.family_friendly !== void 0 && !(0, types_1.isValidYesNo)(vid.family_friendly)) {
            errorHandler(new errors_1.InvalidVideoFamilyFriendly(url, vid.family_friendly), level);
          }
          if (vid.restriction) {
            if (!types_2.validators.restriction.test(vid.restriction)) {
              errorHandler(new errors_1.InvalidVideoRestriction(url, vid.restriction), level);
            }
            if (!vid["restriction:relationship"] || !(0, types_1.isAllowDeny)(vid["restriction:relationship"])) {
              errorHandler(new errors_1.InvalidVideoRestrictionRelationship(url, vid["restriction:relationship"]), level);
            }
          }
          if (vid.price === "" && vid["price:type"] === void 0 || vid["price:type"] !== void 0 && !(0, types_1.isPriceType)(vid["price:type"])) {
            errorHandler(new errors_1.InvalidVideoPriceType(url, vid["price:type"], vid.price), level);
          }
          if (vid["price:resolution"] !== void 0 && !(0, types_1.isResolution)(vid["price:resolution"])) {
            errorHandler(new errors_1.InvalidVideoResolution(url, vid["price:resolution"]), level);
          }
          if (vid["price:currency"] !== void 0 && !types_2.validators["price:currency"].test(vid["price:currency"])) {
            errorHandler(new errors_1.InvalidVideoPriceCurrency(url, vid["price:currency"]), level);
          }
          validate(vid, "video", url, level);
        });
      }
      return conf;
    }
    exports2.validateSMIOptions = validateSMIOptions;
    function mergeStreams(streams, options) {
      let pass = new stream_1.PassThrough(options);
      let waiting = streams.length;
      for (const stream of streams) {
        pass = stream.pipe(pass, { end: false });
        stream.once("end", () => --waiting === 0 && pass.emit("end"));
      }
      return pass;
    }
    exports2.mergeStreams = mergeStreams;
    var ReadlineStream = class extends stream_1.Readable {
      constructor(options) {
        if (options.autoDestroy === void 0) {
          options.autoDestroy = true;
        }
        options.objectMode = true;
        super(options);
        this._source = (0, readline_1.createInterface)({
          input: options.input,
          terminal: false,
          crlfDelay: Infinity
        });
        this._source.on("line", (chunk2) => {
          if (!this.push(chunk2))
            this._source.pause();
        });
        this._source.on("close", () => {
          this.push(null);
        });
      }
      // _read() will be called when the stream wants to pull more data in.
      // The advisory size argument is ignored in this case.
      _read(size) {
        this._source.resume();
      }
    };
    exports2.ReadlineStream = ReadlineStream;
    function lineSeparatedURLsToSitemapOptions(stream, { isJSON } = {}) {
      return new ReadlineStream({ input: stream }).pipe(new stream_1.Transform({
        objectMode: true,
        // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
        transform: (line, encoding, cb) => {
          if (isJSON || isJSON === void 0 && line[0] === "{") {
            cb(null, JSON.parse(line));
          } else {
            cb(null, line);
          }
        }
      }));
    }
    exports2.lineSeparatedURLsToSitemapOptions = lineSeparatedURLsToSitemapOptions;
    function chunk(array, size = 1) {
      size = Math.max(Math.trunc(size), 0);
      const length = array ? array.length : 0;
      if (!length || size < 1) {
        return [];
      }
      const result = Array(Math.ceil(length / size));
      let index = 0, resIndex = 0;
      while (index < length) {
        result[resIndex++] = array.slice(index, index += size);
      }
      return result;
    }
    exports2.chunk = chunk;
    function boolToYESNO(bool) {
      if (bool === void 0) {
        return bool;
      }
      if (typeof bool === "boolean") {
        return bool ? types_1.EnumYesNo.yes : types_1.EnumYesNo.no;
      }
      return bool;
    }
    function normalizeURL(elem, hostname, lastmodDateOnly = false) {
      let smi = {
        img: [],
        video: [],
        links: [],
        url: ""
      };
      let smiLoose;
      if (typeof elem === "string") {
        smi.url = elem;
        smiLoose = { url: elem };
      } else {
        smiLoose = elem;
      }
      smi.url = new url_1.URL(smiLoose.url, hostname).toString();
      let img = [];
      if (smiLoose.img) {
        if (typeof smiLoose.img === "string") {
          smiLoose.img = [{ url: smiLoose.img }];
        } else if (!Array.isArray(smiLoose.img)) {
          smiLoose.img = [smiLoose.img];
        }
        img = smiLoose.img.map((el) => typeof el === "string" ? { url: el } : el);
      }
      smi.img = img.map((el) => ({
        ...el,
        url: new url_1.URL(el.url, hostname).toString()
      }));
      let links = [];
      if (smiLoose.links) {
        links = smiLoose.links;
      }
      smi.links = links.map((link) => {
        return { ...link, url: new url_1.URL(link.url, hostname).toString() };
      });
      if (smiLoose.video) {
        if (!Array.isArray(smiLoose.video)) {
          smiLoose.video = [smiLoose.video];
        }
        smi.video = smiLoose.video.map((video) => {
          const nv = {
            ...video,
            family_friendly: boolToYESNO(video.family_friendly),
            live: boolToYESNO(video.live),
            requires_subscription: boolToYESNO(video.requires_subscription),
            tag: [],
            rating: void 0
          };
          if (video.tag !== void 0) {
            nv.tag = !Array.isArray(video.tag) ? [video.tag] : video.tag;
          }
          if (video.rating !== void 0) {
            if (typeof video.rating === "string") {
              nv.rating = parseFloat(video.rating);
            } else {
              nv.rating = video.rating;
            }
          }
          if (typeof video.view_count === "string") {
            nv.view_count = parseInt(video.view_count, 10);
          } else if (typeof video.view_count === "number") {
            nv.view_count = video.view_count;
          }
          return nv;
        });
      }
      if (smiLoose.lastmodfile) {
        const { mtime } = (0, fs_1.statSync)(smiLoose.lastmodfile);
        smi.lastmod = new Date(mtime).toISOString();
      } else if (smiLoose.lastmodISO) {
        smi.lastmod = new Date(smiLoose.lastmodISO).toISOString();
      } else if (smiLoose.lastmod) {
        smi.lastmod = new Date(smiLoose.lastmod).toISOString();
      }
      if (lastmodDateOnly && smi.lastmod) {
        smi.lastmod = smi.lastmod.slice(0, 10);
      }
      delete smiLoose.lastmodfile;
      delete smiLoose.lastmodISO;
      smi = { ...smiLoose, ...smi };
      return smi;
    }
    exports2.normalizeURL = normalizeURL;
  }
});

// netlify/functions/node_modules/sitemap/dist/lib/sitemap-stream.js
var require_sitemap_stream = __commonJS({
  "netlify/functions/node_modules/sitemap/dist/lib/sitemap-stream.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.streamToPromise = exports2.SitemapStream = exports2.closetag = exports2.stylesheetInclude = void 0;
    var stream_1 = require("stream");
    var types_1 = require_types();
    var utils_1 = require_utils();
    var sitemap_item_stream_1 = require_sitemap_item_stream();
    var errors_1 = require_errors();
    var xmlDec = '<?xml version="1.0" encoding="UTF-8"?>';
    var stylesheetInclude = (url) => {
      return `<?xml-stylesheet type="text/xsl" href="${url}"?>`;
    };
    exports2.stylesheetInclude = stylesheetInclude;
    var urlsetTagStart = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"';
    var getURLSetNs = ({ news, video, image, xhtml, custom }, xslURL) => {
      let ns = xmlDec;
      if (xslURL) {
        ns += (0, exports2.stylesheetInclude)(xslURL);
      }
      ns += urlsetTagStart;
      if (news) {
        ns += ' xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"';
      }
      if (xhtml) {
        ns += ' xmlns:xhtml="http://www.w3.org/1999/xhtml"';
      }
      if (image) {
        ns += ' xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"';
      }
      if (video) {
        ns += ' xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"';
      }
      if (custom) {
        ns += " " + custom.join(" ");
      }
      return ns + ">";
    };
    exports2.closetag = "</urlset>";
    var defaultXMLNS = {
      news: true,
      xhtml: true,
      image: true,
      video: true
    };
    var defaultStreamOpts = {
      xmlns: defaultXMLNS
    };
    var SitemapStream2 = class extends stream_1.Transform {
      constructor(opts = defaultStreamOpts) {
        opts.objectMode = true;
        super(opts);
        this.hasHeadOutput = false;
        this.hostname = opts.hostname;
        this.level = opts.level || types_1.ErrorLevel.WARN;
        this.errorHandler = opts.errorHandler;
        this.smiStream = new sitemap_item_stream_1.SitemapItemStream({ level: opts.level });
        this.smiStream.on("data", (data) => this.push(data));
        this.lastmodDateOnly = opts.lastmodDateOnly || false;
        this.xmlNS = opts.xmlns || defaultXMLNS;
        this.xslUrl = opts.xslUrl;
      }
      _transform(item, encoding, callback) {
        if (!this.hasHeadOutput) {
          this.hasHeadOutput = true;
          this.push(getURLSetNs(this.xmlNS, this.xslUrl));
        }
        if (!this.smiStream.write((0, utils_1.validateSMIOptions)((0, utils_1.normalizeURL)(item, this.hostname, this.lastmodDateOnly), this.level, this.errorHandler))) {
          this.smiStream.once("drain", callback);
        } else {
          process.nextTick(callback);
        }
      }
      _flush(cb) {
        if (!this.hasHeadOutput) {
          cb(new errors_1.EmptySitemap());
        } else {
          this.push(exports2.closetag);
          cb();
        }
      }
    };
    exports2.SitemapStream = SitemapStream2;
    function streamToPromise(stream) {
      return new Promise((resolve, reject) => {
        const drain = [];
        stream.on("error", reject).pipe(new stream_1.Writable({
          write(chunk, enc, next) {
            drain.push(chunk);
            next();
          }
        })).on("error", reject).on("finish", () => {
          if (!drain.length) {
            reject(new errors_1.EmptyStream());
          } else {
            resolve(Buffer.concat(drain));
          }
        });
      });
    }
    exports2.streamToPromise = streamToPromise;
  }
});

// netlify/functions/node_modules/sitemap/dist/lib/sitemap-index-stream.js
var require_sitemap_index_stream = __commonJS({
  "netlify/functions/node_modules/sitemap/dist/lib/sitemap-index-stream.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.SitemapAndIndexStream = exports2.SitemapIndexStream = exports2.IndexTagNames = void 0;
    var stream_1 = require("stream");
    var types_1 = require_types();
    var sitemap_stream_1 = require_sitemap_stream();
    var sitemap_xml_1 = require_sitemap_xml();
    var IndexTagNames;
    (function(IndexTagNames2) {
      IndexTagNames2["sitemap"] = "sitemap";
      IndexTagNames2["loc"] = "loc";
      IndexTagNames2["lastmod"] = "lastmod";
    })(IndexTagNames = exports2.IndexTagNames || (exports2.IndexTagNames = {}));
    var xmlDec = '<?xml version="1.0" encoding="UTF-8"?>';
    var sitemapIndexTagStart = '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
    var closetag = "</sitemapindex>";
    var defaultStreamOpts = {};
    var SitemapIndexStream = class extends stream_1.Transform {
      /**
       * `SitemapIndexStream` is a Transform stream that takes `IndexItem`s or sitemap URL strings and outputs a stream of sitemap index XML.
       *
       * It automatically handles the XML declaration and the opening and closing tags for the sitemap index.
       *
       * ⚠️ CAUTION: This object is `readable` and must be read (e.g. piped to a file or to /dev/null)
       * before `finish` will be emitted. Failure to read the stream will result in hangs.
       *
       * @param {SitemapIndexStreamOptions} [opts=defaultStreamOpts] - Stream options.
       */
      constructor(opts = defaultStreamOpts) {
        var _a;
        opts.objectMode = true;
        super(opts);
        this.hasHeadOutput = false;
        this.lastmodDateOnly = opts.lastmodDateOnly || false;
        this.level = (_a = opts.level) !== null && _a !== void 0 ? _a : types_1.ErrorLevel.WARN;
        this.xslUrl = opts.xslUrl;
      }
      writeHeadOutput() {
        this.hasHeadOutput = true;
        let stylesheet = "";
        if (this.xslUrl) {
          stylesheet = (0, sitemap_stream_1.stylesheetInclude)(this.xslUrl);
        }
        this.push(xmlDec + stylesheet + sitemapIndexTagStart);
      }
      _transform(item, encoding, callback) {
        if (!this.hasHeadOutput) {
          this.writeHeadOutput();
        }
        this.push((0, sitemap_xml_1.otag)(IndexTagNames.sitemap));
        if (typeof item === "string") {
          this.push((0, sitemap_xml_1.element)(IndexTagNames.loc, item));
        } else {
          this.push((0, sitemap_xml_1.element)(IndexTagNames.loc, item.url));
          if (item.lastmod) {
            const lastmod = new Date(item.lastmod).toISOString();
            this.push((0, sitemap_xml_1.element)(IndexTagNames.lastmod, this.lastmodDateOnly ? lastmod.slice(0, 10) : lastmod));
          }
        }
        this.push((0, sitemap_xml_1.ctag)(IndexTagNames.sitemap));
        callback();
      }
      _flush(cb) {
        if (!this.hasHeadOutput) {
          this.writeHeadOutput();
        }
        this.push(closetag);
        cb();
      }
    };
    exports2.SitemapIndexStream = SitemapIndexStream;
    var SitemapAndIndexStream = class extends SitemapIndexStream {
      /**
       * `SitemapAndIndexStream` is a Transform stream that takes in sitemap items,
       * writes them to sitemap files, adds the sitemap files to a sitemap index,
       * and creates new sitemap files when the count limit is reached.
       *
       * It waits for the target stream of the current sitemap file to finish before
       * moving on to the next if the target stream is returned by the `getSitemapStream`
       * callback in the 3rd position of the tuple.
       *
       * ⚠️ CAUTION: This object is `readable` and must be read (e.g. piped to a file or to /dev/null)
       * before `finish` will be emitted. Failure to read the stream will result in hangs.
       *
       * @param {SitemapAndIndexStreamOptions} opts - Stream options.
       */
      constructor(opts) {
        var _a;
        opts.objectMode = true;
        super(opts);
        this.itemsWritten = 0;
        this.getSitemapStream = opts.getSitemapStream;
        this.limit = (_a = opts.limit) !== null && _a !== void 0 ? _a : 45e3;
      }
      _transform(item, encoding, callback) {
        if (this.itemsWritten % this.limit === 0) {
          if (this.currentSitemap) {
            const onFinish = new Promise((resolve, reject) => {
              var _a, _b, _c;
              (_a = this.currentSitemap) === null || _a === void 0 ? void 0 : _a.on("finish", resolve);
              (_b = this.currentSitemap) === null || _b === void 0 ? void 0 : _b.on("error", reject);
              (_c = this.currentSitemap) === null || _c === void 0 ? void 0 : _c.end();
            });
            const onPipelineFinish = this.currentSitemapPipeline ? new Promise((resolve, reject) => {
              var _a, _b;
              (_a = this.currentSitemapPipeline) === null || _a === void 0 ? void 0 : _a.on("finish", resolve);
              (_b = this.currentSitemapPipeline) === null || _b === void 0 ? void 0 : _b.on("error", reject);
            }) : Promise.resolve();
            Promise.all([onFinish, onPipelineFinish]).then(() => {
              this.createSitemap(encoding);
              this.writeItem(item, callback);
            }).catch(callback);
            return;
          } else {
            this.createSitemap(encoding);
          }
        }
        this.writeItem(item, callback);
      }
      writeItem(item, callback) {
        if (!this.currentSitemap) {
          callback(new Error("No sitemap stream available"));
          return;
        }
        if (!this.currentSitemap.write(item)) {
          this.currentSitemap.once("drain", callback);
        } else {
          process.nextTick(callback);
        }
        this.itemsWritten++;
      }
      /**
       * Called when the stream is finished.
       * If there is a current sitemap, we wait for it to finish before calling the callback.
       *
       * @param cb
       */
      _flush(cb) {
        const onFinish = new Promise((resolve, reject) => {
          if (this.currentSitemap) {
            this.currentSitemap.on("finish", resolve);
            this.currentSitemap.on("error", reject);
            this.currentSitemap.end();
          } else {
            resolve();
          }
        });
        const onPipelineFinish = new Promise((resolve, reject) => {
          if (this.currentSitemapPipeline) {
            this.currentSitemapPipeline.on("finish", resolve);
            this.currentSitemapPipeline.on("error", reject);
          } else {
            resolve();
          }
        });
        Promise.all([onFinish, onPipelineFinish]).then(() => {
          super._flush(cb);
        }).catch((err) => {
          cb(err);
        });
      }
      createSitemap(encoding) {
        const [idxItem, currentSitemap, currentSitemapPipeline] = this.getSitemapStream(this.itemsWritten / this.limit);
        currentSitemap.on("error", (err) => this.emit("error", err));
        this.currentSitemap = currentSitemap;
        this.currentSitemapPipeline = currentSitemapPipeline;
        super._transform(idxItem, encoding, () => {
        });
      }
    };
    exports2.SitemapAndIndexStream = SitemapAndIndexStream;
  }
});

// netlify/functions/node_modules/sitemap/dist/lib/xmllint.js
var require_xmllint = __commonJS({
  "netlify/functions/node_modules/sitemap/dist/lib/xmllint.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.xmlLint = void 0;
    var path_1 = require("path");
    var child_process_1 = require("child_process");
    var errors_1 = require_errors();
    function xmlLint(xml) {
      const args = [
        "--schema",
        (0, path_1.resolve)(__dirname, "..", "..", "schema", "all.xsd"),
        "--noout",
        "-"
      ];
      if (typeof xml === "string") {
        args[args.length - 1] = xml;
      }
      return new Promise((resolve, reject) => {
        (0, child_process_1.execFile)("which", ["xmllint"], (error, stdout, stderr) => {
          if (error) {
            reject([new errors_1.XMLLintUnavailable()]);
            return;
          }
          const xmllint = (0, child_process_1.execFile)("xmllint", args, (error2, stdout2, stderr2) => {
            if (error2) {
              reject([error2, stderr2]);
            }
            resolve();
          });
          if (xmllint.stdout) {
            xmllint.stdout.unpipe();
            if (typeof xml !== "string" && xml && xmllint.stdin) {
              xml.pipe(xmllint.stdin);
            }
          }
        });
      });
    }
    exports2.xmlLint = xmlLint;
  }
});

// netlify/functions/node_modules/sax/lib/sax.js
var require_sax = __commonJS({
  "netlify/functions/node_modules/sax/lib/sax.js"(exports2) {
    (function(sax) {
      sax.parser = function(strict, opt) {
        return new SAXParser(strict, opt);
      };
      sax.SAXParser = SAXParser;
      sax.SAXStream = SAXStream;
      sax.createStream = createStream;
      sax.MAX_BUFFER_LENGTH = 64 * 1024;
      var buffers = [
        "comment",
        "sgmlDecl",
        "textNode",
        "tagName",
        "doctype",
        "procInstName",
        "procInstBody",
        "entity",
        "attribName",
        "attribValue",
        "cdata",
        "script"
      ];
      sax.EVENTS = [
        "text",
        "processinginstruction",
        "sgmldeclaration",
        "doctype",
        "comment",
        "opentagstart",
        "attribute",
        "opentag",
        "closetag",
        "opencdata",
        "cdata",
        "closecdata",
        "error",
        "end",
        "ready",
        "script",
        "opennamespace",
        "closenamespace"
      ];
      function SAXParser(strict, opt) {
        if (!(this instanceof SAXParser)) {
          return new SAXParser(strict, opt);
        }
        var parser = this;
        clearBuffers(parser);
        parser.q = parser.c = "";
        parser.bufferCheckPosition = sax.MAX_BUFFER_LENGTH;
        parser.opt = opt || {};
        parser.opt.lowercase = parser.opt.lowercase || parser.opt.lowercasetags;
        parser.looseCase = parser.opt.lowercase ? "toLowerCase" : "toUpperCase";
        parser.tags = [];
        parser.closed = parser.closedRoot = parser.sawRoot = false;
        parser.tag = parser.error = null;
        parser.strict = !!strict;
        parser.noscript = !!(strict || parser.opt.noscript);
        parser.state = S.BEGIN;
        parser.strictEntities = parser.opt.strictEntities;
        parser.ENTITIES = parser.strictEntities ? Object.create(sax.XML_ENTITIES) : Object.create(sax.ENTITIES);
        parser.attribList = [];
        if (parser.opt.xmlns) {
          parser.ns = Object.create(rootNS);
        }
        if (parser.opt.unquotedAttributeValues === void 0) {
          parser.opt.unquotedAttributeValues = !strict;
        }
        parser.trackPosition = parser.opt.position !== false;
        if (parser.trackPosition) {
          parser.position = parser.line = parser.column = 0;
        }
        emit(parser, "onready");
      }
      if (!Object.create) {
        Object.create = function(o) {
          function F() {
          }
          F.prototype = o;
          var newf = new F();
          return newf;
        };
      }
      if (!Object.keys) {
        Object.keys = function(o) {
          var a = [];
          for (var i in o) if (o.hasOwnProperty(i)) a.push(i);
          return a;
        };
      }
      function checkBufferLength(parser) {
        var maxAllowed = Math.max(sax.MAX_BUFFER_LENGTH, 10);
        var maxActual = 0;
        for (var i = 0, l = buffers.length; i < l; i++) {
          var len = parser[buffers[i]].length;
          if (len > maxAllowed) {
            switch (buffers[i]) {
              case "textNode":
                closeText(parser);
                break;
              case "cdata":
                emitNode(parser, "oncdata", parser.cdata);
                parser.cdata = "";
                break;
              case "script":
                emitNode(parser, "onscript", parser.script);
                parser.script = "";
                break;
              default:
                error(parser, "Max buffer length exceeded: " + buffers[i]);
            }
          }
          maxActual = Math.max(maxActual, len);
        }
        var m = sax.MAX_BUFFER_LENGTH - maxActual;
        parser.bufferCheckPosition = m + parser.position;
      }
      function clearBuffers(parser) {
        for (var i = 0, l = buffers.length; i < l; i++) {
          parser[buffers[i]] = "";
        }
      }
      function flushBuffers(parser) {
        closeText(parser);
        if (parser.cdata !== "") {
          emitNode(parser, "oncdata", parser.cdata);
          parser.cdata = "";
        }
        if (parser.script !== "") {
          emitNode(parser, "onscript", parser.script);
          parser.script = "";
        }
      }
      SAXParser.prototype = {
        end: function() {
          end(this);
        },
        write,
        resume: function() {
          this.error = null;
          return this;
        },
        close: function() {
          return this.write(null);
        },
        flush: function() {
          flushBuffers(this);
        }
      };
      var Stream;
      try {
        Stream = require("stream").Stream;
      } catch (ex) {
        Stream = function() {
        };
      }
      if (!Stream) Stream = function() {
      };
      var streamWraps = sax.EVENTS.filter(function(ev) {
        return ev !== "error" && ev !== "end";
      });
      function createStream(strict, opt) {
        return new SAXStream(strict, opt);
      }
      function SAXStream(strict, opt) {
        if (!(this instanceof SAXStream)) {
          return new SAXStream(strict, opt);
        }
        Stream.apply(this);
        this._parser = new SAXParser(strict, opt);
        this.writable = true;
        this.readable = true;
        var me = this;
        this._parser.onend = function() {
          me.emit("end");
        };
        this._parser.onerror = function(er) {
          me.emit("error", er);
          me._parser.error = null;
        };
        this._decoder = null;
        streamWraps.forEach(function(ev) {
          Object.defineProperty(me, "on" + ev, {
            get: function() {
              return me._parser["on" + ev];
            },
            set: function(h) {
              if (!h) {
                me.removeAllListeners(ev);
                me._parser["on" + ev] = h;
                return h;
              }
              me.on(ev, h);
            },
            enumerable: true,
            configurable: false
          });
        });
      }
      SAXStream.prototype = Object.create(Stream.prototype, {
        constructor: {
          value: SAXStream
        }
      });
      SAXStream.prototype.write = function(data) {
        if (typeof Buffer === "function" && typeof Buffer.isBuffer === "function" && Buffer.isBuffer(data)) {
          if (!this._decoder) {
            var SD = require("string_decoder").StringDecoder;
            this._decoder = new SD("utf8");
          }
          data = this._decoder.write(data);
        }
        this._parser.write(data.toString());
        this.emit("data", data);
        return true;
      };
      SAXStream.prototype.end = function(chunk) {
        if (chunk && chunk.length) {
          this.write(chunk);
        }
        this._parser.end();
        return true;
      };
      SAXStream.prototype.on = function(ev, handler2) {
        var me = this;
        if (!me._parser["on" + ev] && streamWraps.indexOf(ev) !== -1) {
          me._parser["on" + ev] = function() {
            var args = arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments);
            args.splice(0, 0, ev);
            me.emit.apply(me, args);
          };
        }
        return Stream.prototype.on.call(me, ev, handler2);
      };
      var CDATA = "[CDATA[";
      var DOCTYPE = "DOCTYPE";
      var XML_NAMESPACE = "http://www.w3.org/XML/1998/namespace";
      var XMLNS_NAMESPACE = "http://www.w3.org/2000/xmlns/";
      var rootNS = { xml: XML_NAMESPACE, xmlns: XMLNS_NAMESPACE };
      var nameStart = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/;
      var nameBody = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;
      var entityStart = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/;
      var entityBody = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;
      function isWhitespace(c) {
        return c === " " || c === "\n" || c === "\r" || c === "	";
      }
      function isQuote(c) {
        return c === '"' || c === "'";
      }
      function isAttribEnd(c) {
        return c === ">" || isWhitespace(c);
      }
      function isMatch(regex, c) {
        return regex.test(c);
      }
      function notMatch(regex, c) {
        return !isMatch(regex, c);
      }
      var S = 0;
      sax.STATE = {
        BEGIN: S++,
        // leading byte order mark or whitespace
        BEGIN_WHITESPACE: S++,
        // leading whitespace
        TEXT: S++,
        // general stuff
        TEXT_ENTITY: S++,
        // &amp and such.
        OPEN_WAKA: S++,
        // <
        SGML_DECL: S++,
        // <!BLARG
        SGML_DECL_QUOTED: S++,
        // <!BLARG foo "bar
        DOCTYPE: S++,
        // <!DOCTYPE
        DOCTYPE_QUOTED: S++,
        // <!DOCTYPE "//blah
        DOCTYPE_DTD: S++,
        // <!DOCTYPE "//blah" [ ...
        DOCTYPE_DTD_QUOTED: S++,
        // <!DOCTYPE "//blah" [ "foo
        COMMENT_STARTING: S++,
        // <!-
        COMMENT: S++,
        // <!--
        COMMENT_ENDING: S++,
        // <!-- blah -
        COMMENT_ENDED: S++,
        // <!-- blah --
        CDATA: S++,
        // <![CDATA[ something
        CDATA_ENDING: S++,
        // ]
        CDATA_ENDING_2: S++,
        // ]]
        PROC_INST: S++,
        // <?hi
        PROC_INST_BODY: S++,
        // <?hi there
        PROC_INST_ENDING: S++,
        // <?hi "there" ?
        OPEN_TAG: S++,
        // <strong
        OPEN_TAG_SLASH: S++,
        // <strong /
        ATTRIB: S++,
        // <a
        ATTRIB_NAME: S++,
        // <a foo
        ATTRIB_NAME_SAW_WHITE: S++,
        // <a foo _
        ATTRIB_VALUE: S++,
        // <a foo=
        ATTRIB_VALUE_QUOTED: S++,
        // <a foo="bar
        ATTRIB_VALUE_CLOSED: S++,
        // <a foo="bar"
        ATTRIB_VALUE_UNQUOTED: S++,
        // <a foo=bar
        ATTRIB_VALUE_ENTITY_Q: S++,
        // <foo bar="&quot;"
        ATTRIB_VALUE_ENTITY_U: S++,
        // <foo bar=&quot
        CLOSE_TAG: S++,
        // </a
        CLOSE_TAG_SAW_WHITE: S++,
        // </a   >
        SCRIPT: S++,
        // <script> ...
        SCRIPT_ENDING: S++
        // <script> ... <
      };
      sax.XML_ENTITIES = {
        "amp": "&",
        "gt": ">",
        "lt": "<",
        "quot": '"',
        "apos": "'"
      };
      sax.ENTITIES = {
        "amp": "&",
        "gt": ">",
        "lt": "<",
        "quot": '"',
        "apos": "'",
        "AElig": 198,
        "Aacute": 193,
        "Acirc": 194,
        "Agrave": 192,
        "Aring": 197,
        "Atilde": 195,
        "Auml": 196,
        "Ccedil": 199,
        "ETH": 208,
        "Eacute": 201,
        "Ecirc": 202,
        "Egrave": 200,
        "Euml": 203,
        "Iacute": 205,
        "Icirc": 206,
        "Igrave": 204,
        "Iuml": 207,
        "Ntilde": 209,
        "Oacute": 211,
        "Ocirc": 212,
        "Ograve": 210,
        "Oslash": 216,
        "Otilde": 213,
        "Ouml": 214,
        "THORN": 222,
        "Uacute": 218,
        "Ucirc": 219,
        "Ugrave": 217,
        "Uuml": 220,
        "Yacute": 221,
        "aacute": 225,
        "acirc": 226,
        "aelig": 230,
        "agrave": 224,
        "aring": 229,
        "atilde": 227,
        "auml": 228,
        "ccedil": 231,
        "eacute": 233,
        "ecirc": 234,
        "egrave": 232,
        "eth": 240,
        "euml": 235,
        "iacute": 237,
        "icirc": 238,
        "igrave": 236,
        "iuml": 239,
        "ntilde": 241,
        "oacute": 243,
        "ocirc": 244,
        "ograve": 242,
        "oslash": 248,
        "otilde": 245,
        "ouml": 246,
        "szlig": 223,
        "thorn": 254,
        "uacute": 250,
        "ucirc": 251,
        "ugrave": 249,
        "uuml": 252,
        "yacute": 253,
        "yuml": 255,
        "copy": 169,
        "reg": 174,
        "nbsp": 160,
        "iexcl": 161,
        "cent": 162,
        "pound": 163,
        "curren": 164,
        "yen": 165,
        "brvbar": 166,
        "sect": 167,
        "uml": 168,
        "ordf": 170,
        "laquo": 171,
        "not": 172,
        "shy": 173,
        "macr": 175,
        "deg": 176,
        "plusmn": 177,
        "sup1": 185,
        "sup2": 178,
        "sup3": 179,
        "acute": 180,
        "micro": 181,
        "para": 182,
        "middot": 183,
        "cedil": 184,
        "ordm": 186,
        "raquo": 187,
        "frac14": 188,
        "frac12": 189,
        "frac34": 190,
        "iquest": 191,
        "times": 215,
        "divide": 247,
        "OElig": 338,
        "oelig": 339,
        "Scaron": 352,
        "scaron": 353,
        "Yuml": 376,
        "fnof": 402,
        "circ": 710,
        "tilde": 732,
        "Alpha": 913,
        "Beta": 914,
        "Gamma": 915,
        "Delta": 916,
        "Epsilon": 917,
        "Zeta": 918,
        "Eta": 919,
        "Theta": 920,
        "Iota": 921,
        "Kappa": 922,
        "Lambda": 923,
        "Mu": 924,
        "Nu": 925,
        "Xi": 926,
        "Omicron": 927,
        "Pi": 928,
        "Rho": 929,
        "Sigma": 931,
        "Tau": 932,
        "Upsilon": 933,
        "Phi": 934,
        "Chi": 935,
        "Psi": 936,
        "Omega": 937,
        "alpha": 945,
        "beta": 946,
        "gamma": 947,
        "delta": 948,
        "epsilon": 949,
        "zeta": 950,
        "eta": 951,
        "theta": 952,
        "iota": 953,
        "kappa": 954,
        "lambda": 955,
        "mu": 956,
        "nu": 957,
        "xi": 958,
        "omicron": 959,
        "pi": 960,
        "rho": 961,
        "sigmaf": 962,
        "sigma": 963,
        "tau": 964,
        "upsilon": 965,
        "phi": 966,
        "chi": 967,
        "psi": 968,
        "omega": 969,
        "thetasym": 977,
        "upsih": 978,
        "piv": 982,
        "ensp": 8194,
        "emsp": 8195,
        "thinsp": 8201,
        "zwnj": 8204,
        "zwj": 8205,
        "lrm": 8206,
        "rlm": 8207,
        "ndash": 8211,
        "mdash": 8212,
        "lsquo": 8216,
        "rsquo": 8217,
        "sbquo": 8218,
        "ldquo": 8220,
        "rdquo": 8221,
        "bdquo": 8222,
        "dagger": 8224,
        "Dagger": 8225,
        "bull": 8226,
        "hellip": 8230,
        "permil": 8240,
        "prime": 8242,
        "Prime": 8243,
        "lsaquo": 8249,
        "rsaquo": 8250,
        "oline": 8254,
        "frasl": 8260,
        "euro": 8364,
        "image": 8465,
        "weierp": 8472,
        "real": 8476,
        "trade": 8482,
        "alefsym": 8501,
        "larr": 8592,
        "uarr": 8593,
        "rarr": 8594,
        "darr": 8595,
        "harr": 8596,
        "crarr": 8629,
        "lArr": 8656,
        "uArr": 8657,
        "rArr": 8658,
        "dArr": 8659,
        "hArr": 8660,
        "forall": 8704,
        "part": 8706,
        "exist": 8707,
        "empty": 8709,
        "nabla": 8711,
        "isin": 8712,
        "notin": 8713,
        "ni": 8715,
        "prod": 8719,
        "sum": 8721,
        "minus": 8722,
        "lowast": 8727,
        "radic": 8730,
        "prop": 8733,
        "infin": 8734,
        "ang": 8736,
        "and": 8743,
        "or": 8744,
        "cap": 8745,
        "cup": 8746,
        "int": 8747,
        "there4": 8756,
        "sim": 8764,
        "cong": 8773,
        "asymp": 8776,
        "ne": 8800,
        "equiv": 8801,
        "le": 8804,
        "ge": 8805,
        "sub": 8834,
        "sup": 8835,
        "nsub": 8836,
        "sube": 8838,
        "supe": 8839,
        "oplus": 8853,
        "otimes": 8855,
        "perp": 8869,
        "sdot": 8901,
        "lceil": 8968,
        "rceil": 8969,
        "lfloor": 8970,
        "rfloor": 8971,
        "lang": 9001,
        "rang": 9002,
        "loz": 9674,
        "spades": 9824,
        "clubs": 9827,
        "hearts": 9829,
        "diams": 9830
      };
      Object.keys(sax.ENTITIES).forEach(function(key) {
        var e = sax.ENTITIES[key];
        var s2 = typeof e === "number" ? String.fromCharCode(e) : e;
        sax.ENTITIES[key] = s2;
      });
      for (var s in sax.STATE) {
        sax.STATE[sax.STATE[s]] = s;
      }
      S = sax.STATE;
      function emit(parser, event, data) {
        parser[event] && parser[event](data);
      }
      function emitNode(parser, nodeType, data) {
        if (parser.textNode) closeText(parser);
        emit(parser, nodeType, data);
      }
      function closeText(parser) {
        parser.textNode = textopts(parser.opt, parser.textNode);
        if (parser.textNode) emit(parser, "ontext", parser.textNode);
        parser.textNode = "";
      }
      function textopts(opt, text) {
        if (opt.trim) text = text.trim();
        if (opt.normalize) text = text.replace(/\s+/g, " ");
        return text;
      }
      function error(parser, er) {
        closeText(parser);
        if (parser.trackPosition) {
          er += "\nLine: " + parser.line + "\nColumn: " + parser.column + "\nChar: " + parser.c;
        }
        er = new Error(er);
        parser.error = er;
        emit(parser, "onerror", er);
        return parser;
      }
      function end(parser) {
        if (parser.sawRoot && !parser.closedRoot) strictFail(parser, "Unclosed root tag");
        if (parser.state !== S.BEGIN && parser.state !== S.BEGIN_WHITESPACE && parser.state !== S.TEXT) {
          error(parser, "Unexpected end");
        }
        closeText(parser);
        parser.c = "";
        parser.closed = true;
        emit(parser, "onend");
        SAXParser.call(parser, parser.strict, parser.opt);
        return parser;
      }
      function strictFail(parser, message) {
        if (typeof parser !== "object" || !(parser instanceof SAXParser)) {
          throw new Error("bad call to strictFail");
        }
        if (parser.strict) {
          error(parser, message);
        }
      }
      function newTag(parser) {
        if (!parser.strict) parser.tagName = parser.tagName[parser.looseCase]();
        var parent = parser.tags[parser.tags.length - 1] || parser;
        var tag = parser.tag = { name: parser.tagName, attributes: {} };
        if (parser.opt.xmlns) {
          tag.ns = parent.ns;
        }
        parser.attribList.length = 0;
        emitNode(parser, "onopentagstart", tag);
      }
      function qname(name, attribute) {
        var i = name.indexOf(":");
        var qualName = i < 0 ? ["", name] : name.split(":");
        var prefix = qualName[0];
        var local = qualName[1];
        if (attribute && name === "xmlns") {
          prefix = "xmlns";
          local = "";
        }
        return { prefix, local };
      }
      function attrib(parser) {
        if (!parser.strict) {
          parser.attribName = parser.attribName[parser.looseCase]();
        }
        if (parser.attribList.indexOf(parser.attribName) !== -1 || parser.tag.attributes.hasOwnProperty(parser.attribName)) {
          parser.attribName = parser.attribValue = "";
          return;
        }
        if (parser.opt.xmlns) {
          var qn = qname(parser.attribName, true);
          var prefix = qn.prefix;
          var local = qn.local;
          if (prefix === "xmlns") {
            if (local === "xml" && parser.attribValue !== XML_NAMESPACE) {
              strictFail(
                parser,
                "xml: prefix must be bound to " + XML_NAMESPACE + "\nActual: " + parser.attribValue
              );
            } else if (local === "xmlns" && parser.attribValue !== XMLNS_NAMESPACE) {
              strictFail(
                parser,
                "xmlns: prefix must be bound to " + XMLNS_NAMESPACE + "\nActual: " + parser.attribValue
              );
            } else {
              var tag = parser.tag;
              var parent = parser.tags[parser.tags.length - 1] || parser;
              if (tag.ns === parent.ns) {
                tag.ns = Object.create(parent.ns);
              }
              tag.ns[local] = parser.attribValue;
            }
          }
          parser.attribList.push([parser.attribName, parser.attribValue]);
        } else {
          parser.tag.attributes[parser.attribName] = parser.attribValue;
          emitNode(parser, "onattribute", {
            name: parser.attribName,
            value: parser.attribValue
          });
        }
        parser.attribName = parser.attribValue = "";
      }
      function openTag(parser, selfClosing) {
        if (parser.opt.xmlns) {
          var tag = parser.tag;
          var qn = qname(parser.tagName);
          tag.prefix = qn.prefix;
          tag.local = qn.local;
          tag.uri = tag.ns[qn.prefix] || "";
          if (tag.prefix && !tag.uri) {
            strictFail(parser, "Unbound namespace prefix: " + JSON.stringify(parser.tagName));
            tag.uri = qn.prefix;
          }
          var parent = parser.tags[parser.tags.length - 1] || parser;
          if (tag.ns && parent.ns !== tag.ns) {
            Object.keys(tag.ns).forEach(function(p) {
              emitNode(parser, "onopennamespace", {
                prefix: p,
                uri: tag.ns[p]
              });
            });
          }
          for (var i = 0, l = parser.attribList.length; i < l; i++) {
            var nv = parser.attribList[i];
            var name = nv[0];
            var value = nv[1];
            var qualName = qname(name, true);
            var prefix = qualName.prefix;
            var local = qualName.local;
            var uri = prefix === "" ? "" : tag.ns[prefix] || "";
            var a = {
              name,
              value,
              prefix,
              local,
              uri
            };
            if (prefix && prefix !== "xmlns" && !uri) {
              strictFail(parser, "Unbound namespace prefix: " + JSON.stringify(prefix));
              a.uri = prefix;
            }
            parser.tag.attributes[name] = a;
            emitNode(parser, "onattribute", a);
          }
          parser.attribList.length = 0;
        }
        parser.tag.isSelfClosing = !!selfClosing;
        parser.sawRoot = true;
        parser.tags.push(parser.tag);
        emitNode(parser, "onopentag", parser.tag);
        if (!selfClosing) {
          if (!parser.noscript && parser.tagName.toLowerCase() === "script") {
            parser.state = S.SCRIPT;
          } else {
            parser.state = S.TEXT;
          }
          parser.tag = null;
          parser.tagName = "";
        }
        parser.attribName = parser.attribValue = "";
        parser.attribList.length = 0;
      }
      function closeTag(parser) {
        if (!parser.tagName) {
          strictFail(parser, "Weird empty close tag.");
          parser.textNode += "</>";
          parser.state = S.TEXT;
          return;
        }
        if (parser.script) {
          if (parser.tagName !== "script") {
            parser.script += "</" + parser.tagName + ">";
            parser.tagName = "";
            parser.state = S.SCRIPT;
            return;
          }
          emitNode(parser, "onscript", parser.script);
          parser.script = "";
        }
        var t = parser.tags.length;
        var tagName = parser.tagName;
        if (!parser.strict) {
          tagName = tagName[parser.looseCase]();
        }
        var closeTo = tagName;
        while (t--) {
          var close = parser.tags[t];
          if (close.name !== closeTo) {
            strictFail(parser, "Unexpected close tag");
          } else {
            break;
          }
        }
        if (t < 0) {
          strictFail(parser, "Unmatched closing tag: " + parser.tagName);
          parser.textNode += "</" + parser.tagName + ">";
          parser.state = S.TEXT;
          return;
        }
        parser.tagName = tagName;
        var s2 = parser.tags.length;
        while (s2-- > t) {
          var tag = parser.tag = parser.tags.pop();
          parser.tagName = parser.tag.name;
          emitNode(parser, "onclosetag", parser.tagName);
          var x = {};
          for (var i in tag.ns) {
            x[i] = tag.ns[i];
          }
          var parent = parser.tags[parser.tags.length - 1] || parser;
          if (parser.opt.xmlns && tag.ns !== parent.ns) {
            Object.keys(tag.ns).forEach(function(p) {
              var n = tag.ns[p];
              emitNode(parser, "onclosenamespace", { prefix: p, uri: n });
            });
          }
        }
        if (t === 0) parser.closedRoot = true;
        parser.tagName = parser.attribValue = parser.attribName = "";
        parser.attribList.length = 0;
        parser.state = S.TEXT;
      }
      function parseEntity(parser) {
        var entity = parser.entity;
        var entityLC = entity.toLowerCase();
        var num;
        var numStr = "";
        if (parser.ENTITIES[entity]) {
          return parser.ENTITIES[entity];
        }
        if (parser.ENTITIES[entityLC]) {
          return parser.ENTITIES[entityLC];
        }
        entity = entityLC;
        if (entity.charAt(0) === "#") {
          if (entity.charAt(1) === "x") {
            entity = entity.slice(2);
            num = parseInt(entity, 16);
            numStr = num.toString(16);
          } else {
            entity = entity.slice(1);
            num = parseInt(entity, 10);
            numStr = num.toString(10);
          }
        }
        entity = entity.replace(/^0+/, "");
        if (isNaN(num) || numStr.toLowerCase() !== entity) {
          strictFail(parser, "Invalid character entity");
          return "&" + parser.entity + ";";
        }
        return String.fromCodePoint(num);
      }
      function beginWhiteSpace(parser, c) {
        if (c === "<") {
          parser.state = S.OPEN_WAKA;
          parser.startTagPosition = parser.position;
        } else if (!isWhitespace(c)) {
          strictFail(parser, "Non-whitespace before first tag.");
          parser.textNode = c;
          parser.state = S.TEXT;
        }
      }
      function charAt(chunk, i) {
        var result = "";
        if (i < chunk.length) {
          result = chunk.charAt(i);
        }
        return result;
      }
      function write(chunk) {
        var parser = this;
        if (this.error) {
          throw this.error;
        }
        if (parser.closed) {
          return error(
            parser,
            "Cannot write after close. Assign an onready handler."
          );
        }
        if (chunk === null) {
          return end(parser);
        }
        if (typeof chunk === "object") {
          chunk = chunk.toString();
        }
        var i = 0;
        var c = "";
        while (true) {
          c = charAt(chunk, i++);
          parser.c = c;
          if (!c) {
            break;
          }
          if (parser.trackPosition) {
            parser.position++;
            if (c === "\n") {
              parser.line++;
              parser.column = 0;
            } else {
              parser.column++;
            }
          }
          switch (parser.state) {
            case S.BEGIN:
              parser.state = S.BEGIN_WHITESPACE;
              if (c === "\uFEFF") {
                continue;
              }
              beginWhiteSpace(parser, c);
              continue;
            case S.BEGIN_WHITESPACE:
              beginWhiteSpace(parser, c);
              continue;
            case S.TEXT:
              if (parser.sawRoot && !parser.closedRoot) {
                var starti = i - 1;
                while (c && c !== "<" && c !== "&") {
                  c = charAt(chunk, i++);
                  if (c && parser.trackPosition) {
                    parser.position++;
                    if (c === "\n") {
                      parser.line++;
                      parser.column = 0;
                    } else {
                      parser.column++;
                    }
                  }
                }
                parser.textNode += chunk.substring(starti, i - 1);
              }
              if (c === "<" && !(parser.sawRoot && parser.closedRoot && !parser.strict)) {
                parser.state = S.OPEN_WAKA;
                parser.startTagPosition = parser.position;
              } else {
                if (!isWhitespace(c) && (!parser.sawRoot || parser.closedRoot)) {
                  strictFail(parser, "Text data outside of root node.");
                }
                if (c === "&") {
                  parser.state = S.TEXT_ENTITY;
                } else {
                  parser.textNode += c;
                }
              }
              continue;
            case S.SCRIPT:
              if (c === "<") {
                parser.state = S.SCRIPT_ENDING;
              } else {
                parser.script += c;
              }
              continue;
            case S.SCRIPT_ENDING:
              if (c === "/") {
                parser.state = S.CLOSE_TAG;
              } else {
                parser.script += "<" + c;
                parser.state = S.SCRIPT;
              }
              continue;
            case S.OPEN_WAKA:
              if (c === "!") {
                parser.state = S.SGML_DECL;
                parser.sgmlDecl = "";
              } else if (isWhitespace(c)) {
              } else if (isMatch(nameStart, c)) {
                parser.state = S.OPEN_TAG;
                parser.tagName = c;
              } else if (c === "/") {
                parser.state = S.CLOSE_TAG;
                parser.tagName = "";
              } else if (c === "?") {
                parser.state = S.PROC_INST;
                parser.procInstName = parser.procInstBody = "";
              } else {
                strictFail(parser, "Unencoded <");
                if (parser.startTagPosition + 1 < parser.position) {
                  var pad = parser.position - parser.startTagPosition;
                  c = new Array(pad).join(" ") + c;
                }
                parser.textNode += "<" + c;
                parser.state = S.TEXT;
              }
              continue;
            case S.SGML_DECL:
              if (parser.sgmlDecl + c === "--") {
                parser.state = S.COMMENT;
                parser.comment = "";
                parser.sgmlDecl = "";
                continue;
              }
              if (parser.doctype && parser.doctype !== true && parser.sgmlDecl) {
                parser.state = S.DOCTYPE_DTD;
                parser.doctype += "<!" + parser.sgmlDecl + c;
                parser.sgmlDecl = "";
              } else if ((parser.sgmlDecl + c).toUpperCase() === CDATA) {
                emitNode(parser, "onopencdata");
                parser.state = S.CDATA;
                parser.sgmlDecl = "";
                parser.cdata = "";
              } else if ((parser.sgmlDecl + c).toUpperCase() === DOCTYPE) {
                parser.state = S.DOCTYPE;
                if (parser.doctype || parser.sawRoot) {
                  strictFail(
                    parser,
                    "Inappropriately located doctype declaration"
                  );
                }
                parser.doctype = "";
                parser.sgmlDecl = "";
              } else if (c === ">") {
                emitNode(parser, "onsgmldeclaration", parser.sgmlDecl);
                parser.sgmlDecl = "";
                parser.state = S.TEXT;
              } else if (isQuote(c)) {
                parser.state = S.SGML_DECL_QUOTED;
                parser.sgmlDecl += c;
              } else {
                parser.sgmlDecl += c;
              }
              continue;
            case S.SGML_DECL_QUOTED:
              if (c === parser.q) {
                parser.state = S.SGML_DECL;
                parser.q = "";
              }
              parser.sgmlDecl += c;
              continue;
            case S.DOCTYPE:
              if (c === ">") {
                parser.state = S.TEXT;
                emitNode(parser, "ondoctype", parser.doctype);
                parser.doctype = true;
              } else {
                parser.doctype += c;
                if (c === "[") {
                  parser.state = S.DOCTYPE_DTD;
                } else if (isQuote(c)) {
                  parser.state = S.DOCTYPE_QUOTED;
                  parser.q = c;
                }
              }
              continue;
            case S.DOCTYPE_QUOTED:
              parser.doctype += c;
              if (c === parser.q) {
                parser.q = "";
                parser.state = S.DOCTYPE;
              }
              continue;
            case S.DOCTYPE_DTD:
              if (c === "]") {
                parser.doctype += c;
                parser.state = S.DOCTYPE;
              } else if (c === "<") {
                parser.state = S.OPEN_WAKA;
                parser.startTagPosition = parser.position;
              } else if (isQuote(c)) {
                parser.doctype += c;
                parser.state = S.DOCTYPE_DTD_QUOTED;
                parser.q = c;
              } else {
                parser.doctype += c;
              }
              continue;
            case S.DOCTYPE_DTD_QUOTED:
              parser.doctype += c;
              if (c === parser.q) {
                parser.state = S.DOCTYPE_DTD;
                parser.q = "";
              }
              continue;
            case S.COMMENT:
              if (c === "-") {
                parser.state = S.COMMENT_ENDING;
              } else {
                parser.comment += c;
              }
              continue;
            case S.COMMENT_ENDING:
              if (c === "-") {
                parser.state = S.COMMENT_ENDED;
                parser.comment = textopts(parser.opt, parser.comment);
                if (parser.comment) {
                  emitNode(parser, "oncomment", parser.comment);
                }
                parser.comment = "";
              } else {
                parser.comment += "-" + c;
                parser.state = S.COMMENT;
              }
              continue;
            case S.COMMENT_ENDED:
              if (c !== ">") {
                strictFail(parser, "Malformed comment");
                parser.comment += "--" + c;
                parser.state = S.COMMENT;
              } else if (parser.doctype && parser.doctype !== true) {
                parser.state = S.DOCTYPE_DTD;
              } else {
                parser.state = S.TEXT;
              }
              continue;
            case S.CDATA:
              if (c === "]") {
                parser.state = S.CDATA_ENDING;
              } else {
                parser.cdata += c;
              }
              continue;
            case S.CDATA_ENDING:
              if (c === "]") {
                parser.state = S.CDATA_ENDING_2;
              } else {
                parser.cdata += "]" + c;
                parser.state = S.CDATA;
              }
              continue;
            case S.CDATA_ENDING_2:
              if (c === ">") {
                if (parser.cdata) {
                  emitNode(parser, "oncdata", parser.cdata);
                }
                emitNode(parser, "onclosecdata");
                parser.cdata = "";
                parser.state = S.TEXT;
              } else if (c === "]") {
                parser.cdata += "]";
              } else {
                parser.cdata += "]]" + c;
                parser.state = S.CDATA;
              }
              continue;
            case S.PROC_INST:
              if (c === "?") {
                parser.state = S.PROC_INST_ENDING;
              } else if (isWhitespace(c)) {
                parser.state = S.PROC_INST_BODY;
              } else {
                parser.procInstName += c;
              }
              continue;
            case S.PROC_INST_BODY:
              if (!parser.procInstBody && isWhitespace(c)) {
                continue;
              } else if (c === "?") {
                parser.state = S.PROC_INST_ENDING;
              } else {
                parser.procInstBody += c;
              }
              continue;
            case S.PROC_INST_ENDING:
              if (c === ">") {
                emitNode(parser, "onprocessinginstruction", {
                  name: parser.procInstName,
                  body: parser.procInstBody
                });
                parser.procInstName = parser.procInstBody = "";
                parser.state = S.TEXT;
              } else {
                parser.procInstBody += "?" + c;
                parser.state = S.PROC_INST_BODY;
              }
              continue;
            case S.OPEN_TAG:
              if (isMatch(nameBody, c)) {
                parser.tagName += c;
              } else {
                newTag(parser);
                if (c === ">") {
                  openTag(parser);
                } else if (c === "/") {
                  parser.state = S.OPEN_TAG_SLASH;
                } else {
                  if (!isWhitespace(c)) {
                    strictFail(parser, "Invalid character in tag name");
                  }
                  parser.state = S.ATTRIB;
                }
              }
              continue;
            case S.OPEN_TAG_SLASH:
              if (c === ">") {
                openTag(parser, true);
                closeTag(parser);
              } else {
                strictFail(parser, "Forward-slash in opening tag not followed by >");
                parser.state = S.ATTRIB;
              }
              continue;
            case S.ATTRIB:
              if (isWhitespace(c)) {
                continue;
              } else if (c === ">") {
                openTag(parser);
              } else if (c === "/") {
                parser.state = S.OPEN_TAG_SLASH;
              } else if (isMatch(nameStart, c)) {
                parser.attribName = c;
                parser.attribValue = "";
                parser.state = S.ATTRIB_NAME;
              } else {
                strictFail(parser, "Invalid attribute name");
              }
              continue;
            case S.ATTRIB_NAME:
              if (c === "=") {
                parser.state = S.ATTRIB_VALUE;
              } else if (c === ">") {
                strictFail(parser, "Attribute without value");
                parser.attribValue = parser.attribName;
                attrib(parser);
                openTag(parser);
              } else if (isWhitespace(c)) {
                parser.state = S.ATTRIB_NAME_SAW_WHITE;
              } else if (isMatch(nameBody, c)) {
                parser.attribName += c;
              } else {
                strictFail(parser, "Invalid attribute name");
              }
              continue;
            case S.ATTRIB_NAME_SAW_WHITE:
              if (c === "=") {
                parser.state = S.ATTRIB_VALUE;
              } else if (isWhitespace(c)) {
                continue;
              } else {
                strictFail(parser, "Attribute without value");
                parser.tag.attributes[parser.attribName] = "";
                parser.attribValue = "";
                emitNode(parser, "onattribute", {
                  name: parser.attribName,
                  value: ""
                });
                parser.attribName = "";
                if (c === ">") {
                  openTag(parser);
                } else if (isMatch(nameStart, c)) {
                  parser.attribName = c;
                  parser.state = S.ATTRIB_NAME;
                } else {
                  strictFail(parser, "Invalid attribute name");
                  parser.state = S.ATTRIB;
                }
              }
              continue;
            case S.ATTRIB_VALUE:
              if (isWhitespace(c)) {
                continue;
              } else if (isQuote(c)) {
                parser.q = c;
                parser.state = S.ATTRIB_VALUE_QUOTED;
              } else {
                if (!parser.opt.unquotedAttributeValues) {
                  error(parser, "Unquoted attribute value");
                }
                parser.state = S.ATTRIB_VALUE_UNQUOTED;
                parser.attribValue = c;
              }
              continue;
            case S.ATTRIB_VALUE_QUOTED:
              if (c !== parser.q) {
                if (c === "&") {
                  parser.state = S.ATTRIB_VALUE_ENTITY_Q;
                } else {
                  parser.attribValue += c;
                }
                continue;
              }
              attrib(parser);
              parser.q = "";
              parser.state = S.ATTRIB_VALUE_CLOSED;
              continue;
            case S.ATTRIB_VALUE_CLOSED:
              if (isWhitespace(c)) {
                parser.state = S.ATTRIB;
              } else if (c === ">") {
                openTag(parser);
              } else if (c === "/") {
                parser.state = S.OPEN_TAG_SLASH;
              } else if (isMatch(nameStart, c)) {
                strictFail(parser, "No whitespace between attributes");
                parser.attribName = c;
                parser.attribValue = "";
                parser.state = S.ATTRIB_NAME;
              } else {
                strictFail(parser, "Invalid attribute name");
              }
              continue;
            case S.ATTRIB_VALUE_UNQUOTED:
              if (!isAttribEnd(c)) {
                if (c === "&") {
                  parser.state = S.ATTRIB_VALUE_ENTITY_U;
                } else {
                  parser.attribValue += c;
                }
                continue;
              }
              attrib(parser);
              if (c === ">") {
                openTag(parser);
              } else {
                parser.state = S.ATTRIB;
              }
              continue;
            case S.CLOSE_TAG:
              if (!parser.tagName) {
                if (isWhitespace(c)) {
                  continue;
                } else if (notMatch(nameStart, c)) {
                  if (parser.script) {
                    parser.script += "</" + c;
                    parser.state = S.SCRIPT;
                  } else {
                    strictFail(parser, "Invalid tagname in closing tag.");
                  }
                } else {
                  parser.tagName = c;
                }
              } else if (c === ">") {
                closeTag(parser);
              } else if (isMatch(nameBody, c)) {
                parser.tagName += c;
              } else if (parser.script) {
                parser.script += "</" + parser.tagName;
                parser.tagName = "";
                parser.state = S.SCRIPT;
              } else {
                if (!isWhitespace(c)) {
                  strictFail(parser, "Invalid tagname in closing tag");
                }
                parser.state = S.CLOSE_TAG_SAW_WHITE;
              }
              continue;
            case S.CLOSE_TAG_SAW_WHITE:
              if (isWhitespace(c)) {
                continue;
              }
              if (c === ">") {
                closeTag(parser);
              } else {
                strictFail(parser, "Invalid characters in closing tag");
              }
              continue;
            case S.TEXT_ENTITY:
            case S.ATTRIB_VALUE_ENTITY_Q:
            case S.ATTRIB_VALUE_ENTITY_U:
              var returnState;
              var buffer;
              switch (parser.state) {
                case S.TEXT_ENTITY:
                  returnState = S.TEXT;
                  buffer = "textNode";
                  break;
                case S.ATTRIB_VALUE_ENTITY_Q:
                  returnState = S.ATTRIB_VALUE_QUOTED;
                  buffer = "attribValue";
                  break;
                case S.ATTRIB_VALUE_ENTITY_U:
                  returnState = S.ATTRIB_VALUE_UNQUOTED;
                  buffer = "attribValue";
                  break;
              }
              if (c === ";") {
                var parsedEntity = parseEntity(parser);
                if (parser.opt.unparsedEntities && !Object.values(sax.XML_ENTITIES).includes(parsedEntity)) {
                  parser.entity = "";
                  parser.state = returnState;
                  parser.write(parsedEntity);
                } else {
                  parser[buffer] += parsedEntity;
                  parser.entity = "";
                  parser.state = returnState;
                }
              } else if (isMatch(parser.entity.length ? entityBody : entityStart, c)) {
                parser.entity += c;
              } else {
                strictFail(parser, "Invalid character in entity name");
                parser[buffer] += "&" + parser.entity + c;
                parser.entity = "";
                parser.state = returnState;
              }
              continue;
            default: {
              throw new Error(parser, "Unknown state: " + parser.state);
            }
          }
        }
        if (parser.position >= parser.bufferCheckPosition) {
          checkBufferLength(parser);
        }
        return parser;
      }
      if (!String.fromCodePoint) {
        (function() {
          var stringFromCharCode = String.fromCharCode;
          var floor = Math.floor;
          var fromCodePoint = function() {
            var MAX_SIZE = 16384;
            var codeUnits = [];
            var highSurrogate;
            var lowSurrogate;
            var index = -1;
            var length = arguments.length;
            if (!length) {
              return "";
            }
            var result = "";
            while (++index < length) {
              var codePoint = Number(arguments[index]);
              if (!isFinite(codePoint) || // `NaN`, `+Infinity`, or `-Infinity`
              codePoint < 0 || // not a valid Unicode code point
              codePoint > 1114111 || // not a valid Unicode code point
              floor(codePoint) !== codePoint) {
                throw RangeError("Invalid code point: " + codePoint);
              }
              if (codePoint <= 65535) {
                codeUnits.push(codePoint);
              } else {
                codePoint -= 65536;
                highSurrogate = (codePoint >> 10) + 55296;
                lowSurrogate = codePoint % 1024 + 56320;
                codeUnits.push(highSurrogate, lowSurrogate);
              }
              if (index + 1 === length || codeUnits.length > MAX_SIZE) {
                result += stringFromCharCode.apply(null, codeUnits);
                codeUnits.length = 0;
              }
            }
            return result;
          };
          if (Object.defineProperty) {
            Object.defineProperty(String, "fromCodePoint", {
              value: fromCodePoint,
              configurable: true,
              writable: true
            });
          } else {
            String.fromCodePoint = fromCodePoint;
          }
        })();
      }
    })(typeof exports2 === "undefined" ? exports2.sax = {} : exports2);
  }
});

// netlify/functions/node_modules/sitemap/dist/lib/sitemap-parser.js
var require_sitemap_parser = __commonJS({
  "netlify/functions/node_modules/sitemap/dist/lib/sitemap-parser.js"(exports2) {
    "use strict";
    var __importDefault = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ObjectStreamToJSON = exports2.parseSitemap = exports2.XMLToSitemapItemStream = void 0;
    var sax_1 = __importDefault(require_sax());
    var stream_1 = require("stream");
    var types_1 = require_types();
    function isValidTagName(tagName) {
      return tagName in types_1.TagNames;
    }
    function tagTemplate() {
      return {
        img: [],
        video: [],
        links: [],
        url: ""
      };
    }
    function videoTemplate() {
      return {
        tag: [],
        thumbnail_loc: "",
        title: "",
        description: ""
      };
    }
    var imageTemplate = {
      url: ""
    };
    var linkTemplate = {
      lang: "",
      url: ""
    };
    function newsTemplate() {
      return {
        publication: { name: "", language: "" },
        publication_date: "",
        title: ""
      };
    }
    var defaultLogger = (level, ...message) => console[level](...message);
    var defaultStreamOpts = {
      logger: defaultLogger
    };
    var XMLToSitemapItemStream = class extends stream_1.Transform {
      constructor(opts = defaultStreamOpts) {
        var _a;
        opts.objectMode = true;
        super(opts);
        this.error = null;
        this.saxStream = sax_1.default.createStream(true, {
          xmlns: true,
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          strictEntities: true,
          trim: true
        });
        this.level = opts.level || types_1.ErrorLevel.WARN;
        if (this.level !== types_1.ErrorLevel.SILENT && opts.logger !== false) {
          this.logger = (_a = opts.logger) !== null && _a !== void 0 ? _a : defaultLogger;
        } else {
          this.logger = () => void 0;
        }
        let currentItem = tagTemplate();
        let currentTag;
        let currentVideo = videoTemplate();
        let currentImage = { ...imageTemplate };
        let currentLink = { ...linkTemplate };
        let dontpushCurrentLink = false;
        this.saxStream.on("opentagstart", (tag) => {
          currentTag = tag.name;
          if (currentTag.startsWith("news:") && !currentItem.news) {
            currentItem.news = newsTemplate();
          }
        });
        this.saxStream.on("opentag", (tag) => {
          if (isValidTagName(tag.name)) {
            if (tag.name === "xhtml:link") {
              if (typeof tag.attributes.rel === "string" || typeof tag.attributes.href === "string") {
                return;
              }
              if (tag.attributes.rel.value === "alternate" && tag.attributes.hreflang) {
                currentLink.url = tag.attributes.href.value;
                if (typeof tag.attributes.hreflang === "string")
                  return;
                currentLink.lang = tag.attributes.hreflang.value;
              } else if (tag.attributes.rel.value === "alternate") {
                dontpushCurrentLink = true;
                currentItem.androidLink = tag.attributes.href.value;
              } else if (tag.attributes.rel.value === "amphtml") {
                dontpushCurrentLink = true;
                currentItem.ampLink = tag.attributes.href.value;
              } else {
                this.logger("log", "unhandled attr for xhtml:link", tag.attributes);
                this.err(`unhandled attr for xhtml:link ${tag.attributes}`);
              }
            }
          } else {
            this.logger("warn", "unhandled tag", tag.name);
            this.err(`unhandled tag: ${tag.name}`);
          }
        });
        this.saxStream.on("text", (text) => {
          switch (currentTag) {
            case "mobile:mobile":
              break;
            case types_1.TagNames.loc:
              currentItem.url = text;
              break;
            case types_1.TagNames.changefreq:
              if ((0, types_1.isValidChangeFreq)(text)) {
                currentItem.changefreq = text;
              }
              break;
            case types_1.TagNames.priority:
              currentItem.priority = parseFloat(text);
              break;
            case types_1.TagNames.lastmod:
              currentItem.lastmod = text;
              break;
            case types_1.TagNames["video:thumbnail_loc"]:
              currentVideo.thumbnail_loc = text;
              break;
            case types_1.TagNames["video:tag"]:
              currentVideo.tag.push(text);
              break;
            case types_1.TagNames["video:duration"]:
              currentVideo.duration = parseInt(text, 10);
              break;
            case types_1.TagNames["video:player_loc"]:
              currentVideo.player_loc = text;
              break;
            case types_1.TagNames["video:content_loc"]:
              currentVideo.content_loc = text;
              break;
            case types_1.TagNames["video:requires_subscription"]:
              if ((0, types_1.isValidYesNo)(text)) {
                currentVideo.requires_subscription = text;
              }
              break;
            case types_1.TagNames["video:publication_date"]:
              currentVideo.publication_date = text;
              break;
            case types_1.TagNames["video:id"]:
              currentVideo.id = text;
              break;
            case types_1.TagNames["video:restriction"]:
              currentVideo.restriction = text;
              break;
            case types_1.TagNames["video:view_count"]:
              currentVideo.view_count = parseInt(text, 10);
              break;
            case types_1.TagNames["video:uploader"]:
              currentVideo.uploader = text;
              break;
            case types_1.TagNames["video:family_friendly"]:
              if ((0, types_1.isValidYesNo)(text)) {
                currentVideo.family_friendly = text;
              }
              break;
            case types_1.TagNames["video:expiration_date"]:
              currentVideo.expiration_date = text;
              break;
            case types_1.TagNames["video:platform"]:
              currentVideo.platform = text;
              break;
            case types_1.TagNames["video:price"]:
              currentVideo.price = text;
              break;
            case types_1.TagNames["video:rating"]:
              currentVideo.rating = parseFloat(text);
              break;
            case types_1.TagNames["video:category"]:
              currentVideo.category = text;
              break;
            case types_1.TagNames["video:live"]:
              if ((0, types_1.isValidYesNo)(text)) {
                currentVideo.live = text;
              }
              break;
            case types_1.TagNames["video:gallery_loc"]:
              currentVideo.gallery_loc = text;
              break;
            case types_1.TagNames["image:loc"]:
              currentImage.url = text;
              break;
            case types_1.TagNames["image:geo_location"]:
              currentImage.geoLocation = text;
              break;
            case types_1.TagNames["image:license"]:
              currentImage.license = text;
              break;
            case types_1.TagNames["news:access"]:
              if (!currentItem.news) {
                currentItem.news = newsTemplate();
              }
              currentItem.news.access = text;
              break;
            case types_1.TagNames["news:genres"]:
              if (!currentItem.news) {
                currentItem.news = newsTemplate();
              }
              currentItem.news.genres = text;
              break;
            case types_1.TagNames["news:publication_date"]:
              if (!currentItem.news) {
                currentItem.news = newsTemplate();
              }
              currentItem.news.publication_date = text;
              break;
            case types_1.TagNames["news:keywords"]:
              if (!currentItem.news) {
                currentItem.news = newsTemplate();
              }
              currentItem.news.keywords = text;
              break;
            case types_1.TagNames["news:stock_tickers"]:
              if (!currentItem.news) {
                currentItem.news = newsTemplate();
              }
              currentItem.news.stock_tickers = text;
              break;
            case types_1.TagNames["news:language"]:
              if (!currentItem.news) {
                currentItem.news = newsTemplate();
              }
              currentItem.news.publication.language = text;
              break;
            case types_1.TagNames["video:title"]:
              currentVideo.title += text;
              break;
            case types_1.TagNames["video:description"]:
              currentVideo.description += text;
              break;
            case types_1.TagNames["news:name"]:
              if (!currentItem.news) {
                currentItem.news = newsTemplate();
              }
              currentItem.news.publication.name += text;
              break;
            case types_1.TagNames["news:title"]:
              if (!currentItem.news) {
                currentItem.news = newsTemplate();
              }
              currentItem.news.title += text;
              break;
            case types_1.TagNames["image:caption"]:
              if (!currentImage.caption) {
                currentImage.caption = text;
              } else {
                currentImage.caption += text;
              }
              break;
            case types_1.TagNames["image:title"]:
              if (!currentImage.title) {
                currentImage.title = text;
              } else {
                currentImage.title += text;
              }
              break;
            default:
              this.logger("log", "unhandled text for tag:", currentTag, `'${text}'`);
              this.err(`unhandled text for tag: ${currentTag} '${text}'`);
              break;
          }
        });
        this.saxStream.on("cdata", (text) => {
          switch (currentTag) {
            case types_1.TagNames["video:title"]:
              currentVideo.title += text;
              break;
            case types_1.TagNames["video:description"]:
              currentVideo.description += text;
              break;
            case types_1.TagNames["news:name"]:
              if (!currentItem.news) {
                currentItem.news = newsTemplate();
              }
              currentItem.news.publication.name += text;
              break;
            case types_1.TagNames["news:title"]:
              if (!currentItem.news) {
                currentItem.news = newsTemplate();
              }
              currentItem.news.title += text;
              break;
            case types_1.TagNames["image:caption"]:
              if (!currentImage.caption) {
                currentImage.caption = text;
              } else {
                currentImage.caption += text;
              }
              break;
            case types_1.TagNames["image:title"]:
              if (!currentImage.title) {
                currentImage.title = text;
              } else {
                currentImage.title += text;
              }
              break;
            default:
              this.logger("log", "unhandled cdata for tag:", currentTag);
              this.err(`unhandled cdata for tag: ${currentTag}`);
              break;
          }
        });
        this.saxStream.on("attribute", (attr) => {
          switch (currentTag) {
            case types_1.TagNames["urlset"]:
            case types_1.TagNames["xhtml:link"]:
            case types_1.TagNames["video:id"]:
              break;
            case types_1.TagNames["video:restriction"]:
              if (attr.name === "relationship" && (0, types_1.isAllowDeny)(attr.value)) {
                currentVideo["restriction:relationship"] = attr.value;
              } else {
                this.logger("log", "unhandled attr", currentTag, attr.name);
                this.err(`unhandled attr: ${currentTag} ${attr.name}`);
              }
              break;
            case types_1.TagNames["video:price"]:
              if (attr.name === "type" && (0, types_1.isPriceType)(attr.value)) {
                currentVideo["price:type"] = attr.value;
              } else if (attr.name === "currency") {
                currentVideo["price:currency"] = attr.value;
              } else if (attr.name === "resolution" && (0, types_1.isResolution)(attr.value)) {
                currentVideo["price:resolution"] = attr.value;
              } else {
                this.logger("log", "unhandled attr for video:price", attr.name);
                this.err(`unhandled attr: ${currentTag} ${attr.name}`);
              }
              break;
            case types_1.TagNames["video:player_loc"]:
              if (attr.name === "autoplay") {
                currentVideo["player_loc:autoplay"] = attr.value;
              } else if (attr.name === "allow_embed" && (0, types_1.isValidYesNo)(attr.value)) {
                currentVideo["player_loc:allow_embed"] = attr.value;
              } else {
                this.logger("log", "unhandled attr for video:player_loc", attr.name);
                this.err(`unhandled attr: ${currentTag} ${attr.name}`);
              }
              break;
            case types_1.TagNames["video:platform"]:
              if (attr.name === "relationship" && (0, types_1.isAllowDeny)(attr.value)) {
                currentVideo["platform:relationship"] = attr.value;
              } else {
                this.logger("log", "unhandled attr for video:platform", attr.name, attr.value);
                this.err(`unhandled attr: ${currentTag} ${attr.name} ${attr.value}`);
              }
              break;
            case types_1.TagNames["video:gallery_loc"]:
              if (attr.name === "title") {
                currentVideo["gallery_loc:title"] = attr.value;
              } else {
                this.logger("log", "unhandled attr for video:galler_loc", attr.name);
                this.err(`unhandled attr: ${currentTag} ${attr.name}`);
              }
              break;
            case types_1.TagNames["video:uploader"]:
              if (attr.name === "info") {
                currentVideo["uploader:info"] = attr.value;
              } else {
                this.logger("log", "unhandled attr for video:uploader", attr.name);
                this.err(`unhandled attr: ${currentTag} ${attr.name}`);
              }
              break;
            default:
              this.logger("log", "unhandled attr", currentTag, attr.name);
              this.err(`unhandled attr: ${currentTag} ${attr.name}`);
          }
        });
        this.saxStream.on("closetag", (tag) => {
          switch (tag) {
            case types_1.TagNames.url:
              this.push(currentItem);
              currentItem = tagTemplate();
              break;
            case types_1.TagNames["video:video"]:
              currentItem.video.push(currentVideo);
              currentVideo = videoTemplate();
              break;
            case types_1.TagNames["image:image"]:
              currentItem.img.push(currentImage);
              currentImage = { ...imageTemplate };
              break;
            case types_1.TagNames["xhtml:link"]:
              if (!dontpushCurrentLink) {
                currentItem.links.push(currentLink);
              }
              currentLink = { ...linkTemplate };
              break;
            default:
              break;
          }
        });
      }
      _transform(data, encoding, callback) {
        try {
          const cb = () => callback(this.level === types_1.ErrorLevel.THROW ? this.error : null);
          if (!this.saxStream.write(data, encoding)) {
            this.saxStream.once("drain", cb);
          } else {
            process.nextTick(cb);
          }
        } catch (error) {
          callback(error);
        }
      }
      err(msg) {
        if (!this.error)
          this.error = new Error(msg);
      }
    };
    exports2.XMLToSitemapItemStream = XMLToSitemapItemStream;
    async function parseSitemap(xml) {
      const urls = [];
      return new Promise((resolve, reject) => {
        xml.pipe(new XMLToSitemapItemStream()).on("data", (smi) => urls.push(smi)).on("end", () => {
          resolve(urls);
        }).on("error", (error) => {
          reject(error);
        });
      });
    }
    exports2.parseSitemap = parseSitemap;
    var defaultObjectStreamOpts = {
      lineSeparated: false
    };
    var ObjectStreamToJSON = class extends stream_1.Transform {
      constructor(opts = defaultObjectStreamOpts) {
        opts.writableObjectMode = true;
        super(opts);
        this.lineSeparated = opts.lineSeparated;
        this.firstWritten = false;
      }
      _transform(chunk, encoding, cb) {
        if (!this.firstWritten) {
          this.firstWritten = true;
          if (!this.lineSeparated) {
            this.push("[");
          }
        } else if (this.lineSeparated) {
          this.push("\n");
        } else {
          this.push(",");
        }
        if (chunk) {
          this.push(JSON.stringify(chunk));
        }
        cb();
      }
      _flush(cb) {
        if (!this.lineSeparated) {
          this.push("]");
        }
        cb();
      }
    };
    exports2.ObjectStreamToJSON = ObjectStreamToJSON;
  }
});

// netlify/functions/node_modules/sitemap/dist/lib/sitemap-index-parser.js
var require_sitemap_index_parser = __commonJS({
  "netlify/functions/node_modules/sitemap/dist/lib/sitemap-index-parser.js"(exports2) {
    "use strict";
    var __importDefault = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.IndexObjectStreamToJSON = exports2.parseSitemapIndex = exports2.XMLToSitemapIndexStream = void 0;
    var sax_1 = __importDefault(require_sax());
    var stream_1 = require("stream");
    var types_1 = require_types();
    function isValidTagName(tagName) {
      return tagName in types_1.IndexTagNames;
    }
    function tagTemplate() {
      return {
        url: ""
      };
    }
    var defaultLogger = (level, ...message) => console[level](...message);
    var defaultStreamOpts = {
      logger: defaultLogger
    };
    var XMLToSitemapIndexStream = class extends stream_1.Transform {
      constructor(opts = defaultStreamOpts) {
        var _a;
        opts.objectMode = true;
        super(opts);
        this.saxStream = sax_1.default.createStream(true, {
          xmlns: true,
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          strictEntities: true,
          trim: true
        });
        this.level = opts.level || types_1.ErrorLevel.WARN;
        if (this.level !== types_1.ErrorLevel.SILENT && opts.logger !== false) {
          this.logger = (_a = opts.logger) !== null && _a !== void 0 ? _a : defaultLogger;
        } else {
          this.logger = () => void 0;
        }
        let currentItem = tagTemplate();
        let currentTag;
        this.saxStream.on("opentagstart", (tag) => {
          currentTag = tag.name;
        });
        this.saxStream.on("opentag", (tag) => {
          if (!isValidTagName(tag.name)) {
            this.logger("warn", "unhandled tag", tag.name);
          }
        });
        this.saxStream.on("text", (text) => {
          switch (currentTag) {
            case types_1.IndexTagNames.loc:
              currentItem.url = text;
              break;
            case types_1.IndexTagNames.lastmod:
              currentItem.lastmod = text;
              break;
            default:
              this.logger("log", "unhandled text for tag:", currentTag, `'${text}'`);
              break;
          }
        });
        this.saxStream.on("cdata", (_text) => {
          switch (currentTag) {
            default:
              this.logger("log", "unhandled cdata for tag:", currentTag);
              break;
          }
        });
        this.saxStream.on("attribute", (attr) => {
          switch (currentTag) {
            case types_1.IndexTagNames.sitemapindex:
              break;
            default:
              this.logger("log", "unhandled attr", currentTag, attr.name);
          }
        });
        this.saxStream.on("closetag", (tag) => {
          switch (tag) {
            case types_1.IndexTagNames.sitemap:
              this.push(currentItem);
              currentItem = tagTemplate();
              break;
            default:
              break;
          }
        });
      }
      _transform(data, encoding, callback) {
        try {
          this.saxStream.write(data, encoding);
          callback();
        } catch (error) {
          callback(error);
        }
      }
    };
    exports2.XMLToSitemapIndexStream = XMLToSitemapIndexStream;
    async function parseSitemapIndex(xml) {
      const urls = [];
      return new Promise((resolve, reject) => {
        xml.pipe(new XMLToSitemapIndexStream()).on("data", (smi) => urls.push(smi)).on("end", () => {
          resolve(urls);
        }).on("error", (error) => {
          reject(error);
        });
      });
    }
    exports2.parseSitemapIndex = parseSitemapIndex;
    var defaultObjectStreamOpts = {
      lineSeparated: false
    };
    var IndexObjectStreamToJSON = class extends stream_1.Transform {
      constructor(opts = defaultObjectStreamOpts) {
        opts.writableObjectMode = true;
        super(opts);
        this.lineSeparated = opts.lineSeparated;
        this.firstWritten = false;
      }
      _transform(chunk, encoding, cb) {
        if (!this.firstWritten) {
          this.firstWritten = true;
          if (!this.lineSeparated) {
            this.push("[");
          }
        } else if (this.lineSeparated) {
          this.push("\n");
        } else {
          this.push(",");
        }
        if (chunk) {
          this.push(JSON.stringify(chunk));
        }
        cb();
      }
      _flush(cb) {
        if (!this.lineSeparated) {
          this.push("]");
        }
        cb();
      }
    };
    exports2.IndexObjectStreamToJSON = IndexObjectStreamToJSON;
  }
});

// netlify/functions/node_modules/sitemap/dist/lib/sitemap-simple.js
var require_sitemap_simple = __commonJS({
  "netlify/functions/node_modules/sitemap/dist/lib/sitemap-simple.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.simpleSitemapAndIndex = void 0;
    var sitemap_index_stream_1 = require_sitemap_index_stream();
    var sitemap_stream_1 = require_sitemap_stream();
    var utils_1 = require_utils();
    var zlib_1 = require("zlib");
    var fs_1 = require("fs");
    var path_1 = require("path");
    var stream_1 = require("stream");
    var util_1 = require("util");
    var url_1 = require("url");
    var pipeline = (0, util_1.promisify)(stream_1.pipeline);
    var simpleSitemapAndIndex = async ({
      hostname,
      sitemapHostname = hostname,
      // if different
      /**
       * Pass a line separated list of sitemap items or a stream or an array
       */
      sourceData,
      destinationDir,
      limit = 5e4,
      gzip = true,
      publicBasePath = "./"
    }) => {
      await fs_1.promises.mkdir(destinationDir, { recursive: true });
      const sitemapAndIndexStream = new sitemap_index_stream_1.SitemapAndIndexStream({
        limit,
        getSitemapStream: (i) => {
          const sitemapStream = new sitemap_stream_1.SitemapStream({
            hostname
          });
          const path = `./sitemap-${i}.xml`;
          const writePath2 = (0, path_1.resolve)(destinationDir, path + (gzip ? ".gz" : ""));
          if (!publicBasePath.endsWith("/")) {
            publicBasePath += "/";
          }
          const publicPath = (0, path_1.normalize)(publicBasePath + path);
          let pipeline2;
          if (gzip) {
            pipeline2 = sitemapStream.pipe((0, zlib_1.createGzip)()).pipe((0, fs_1.createWriteStream)(writePath2));
          } else {
            pipeline2 = sitemapStream.pipe((0, fs_1.createWriteStream)(writePath2));
          }
          return [
            new url_1.URL(`${publicPath}${gzip ? ".gz" : ""}`, sitemapHostname).toString(),
            sitemapStream,
            pipeline2
          ];
        }
      });
      let src;
      if (typeof sourceData === "string") {
        src = (0, utils_1.lineSeparatedURLsToSitemapOptions)((0, fs_1.createReadStream)(sourceData));
      } else if (sourceData instanceof stream_1.Readable) {
        src = sourceData;
      } else if (Array.isArray(sourceData)) {
        src = stream_1.Readable.from(sourceData);
      } else {
        throw new Error("unhandled source type. You've passed in data that is not supported");
      }
      const writePath = (0, path_1.resolve)(destinationDir, `./sitemap-index.xml${gzip ? ".gz" : ""}`);
      if (gzip) {
        return pipeline(src, sitemapAndIndexStream, (0, zlib_1.createGzip)(), (0, fs_1.createWriteStream)(writePath));
      } else {
        return pipeline(src, sitemapAndIndexStream, (0, fs_1.createWriteStream)(writePath));
      }
    };
    exports2.simpleSitemapAndIndex = simpleSitemapAndIndex;
    exports2.default = exports2.simpleSitemapAndIndex;
  }
});

// netlify/functions/node_modules/sitemap/dist/index.js
var require_dist = __commonJS({
  "netlify/functions/node_modules/sitemap/dist/index.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p)) __createBinding(exports3, m, p);
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.simpleSitemapAndIndex = exports2.IndexObjectStreamToJSON = exports2.XMLToSitemapIndexStream = exports2.parseSitemapIndex = exports2.ObjectStreamToJSON = exports2.XMLToSitemapItemStream = exports2.parseSitemap = exports2.xmlLint = exports2.ReadlineStream = exports2.normalizeURL = exports2.validateSMIOptions = exports2.mergeStreams = exports2.lineSeparatedURLsToSitemapOptions = exports2.SitemapStream = exports2.streamToPromise = exports2.SitemapAndIndexStream = exports2.SitemapIndexStream = exports2.IndexTagNames = exports2.SitemapItemStream = void 0;
    var sitemap_item_stream_1 = require_sitemap_item_stream();
    Object.defineProperty(exports2, "SitemapItemStream", { enumerable: true, get: function() {
      return sitemap_item_stream_1.SitemapItemStream;
    } });
    var sitemap_index_stream_1 = require_sitemap_index_stream();
    Object.defineProperty(exports2, "IndexTagNames", { enumerable: true, get: function() {
      return sitemap_index_stream_1.IndexTagNames;
    } });
    Object.defineProperty(exports2, "SitemapIndexStream", { enumerable: true, get: function() {
      return sitemap_index_stream_1.SitemapIndexStream;
    } });
    Object.defineProperty(exports2, "SitemapAndIndexStream", { enumerable: true, get: function() {
      return sitemap_index_stream_1.SitemapAndIndexStream;
    } });
    var sitemap_stream_1 = require_sitemap_stream();
    Object.defineProperty(exports2, "streamToPromise", { enumerable: true, get: function() {
      return sitemap_stream_1.streamToPromise;
    } });
    Object.defineProperty(exports2, "SitemapStream", { enumerable: true, get: function() {
      return sitemap_stream_1.SitemapStream;
    } });
    __exportStar(require_errors(), exports2);
    __exportStar(require_types(), exports2);
    var utils_1 = require_utils();
    Object.defineProperty(exports2, "lineSeparatedURLsToSitemapOptions", { enumerable: true, get: function() {
      return utils_1.lineSeparatedURLsToSitemapOptions;
    } });
    Object.defineProperty(exports2, "mergeStreams", { enumerable: true, get: function() {
      return utils_1.mergeStreams;
    } });
    Object.defineProperty(exports2, "validateSMIOptions", { enumerable: true, get: function() {
      return utils_1.validateSMIOptions;
    } });
    Object.defineProperty(exports2, "normalizeURL", { enumerable: true, get: function() {
      return utils_1.normalizeURL;
    } });
    Object.defineProperty(exports2, "ReadlineStream", { enumerable: true, get: function() {
      return utils_1.ReadlineStream;
    } });
    var xmllint_1 = require_xmllint();
    Object.defineProperty(exports2, "xmlLint", { enumerable: true, get: function() {
      return xmllint_1.xmlLint;
    } });
    var sitemap_parser_1 = require_sitemap_parser();
    Object.defineProperty(exports2, "parseSitemap", { enumerable: true, get: function() {
      return sitemap_parser_1.parseSitemap;
    } });
    Object.defineProperty(exports2, "XMLToSitemapItemStream", { enumerable: true, get: function() {
      return sitemap_parser_1.XMLToSitemapItemStream;
    } });
    Object.defineProperty(exports2, "ObjectStreamToJSON", { enumerable: true, get: function() {
      return sitemap_parser_1.ObjectStreamToJSON;
    } });
    var sitemap_index_parser_1 = require_sitemap_index_parser();
    Object.defineProperty(exports2, "parseSitemapIndex", { enumerable: true, get: function() {
      return sitemap_index_parser_1.parseSitemapIndex;
    } });
    Object.defineProperty(exports2, "XMLToSitemapIndexStream", { enumerable: true, get: function() {
      return sitemap_index_parser_1.XMLToSitemapIndexStream;
    } });
    Object.defineProperty(exports2, "IndexObjectStreamToJSON", { enumerable: true, get: function() {
      return sitemap_index_parser_1.IndexObjectStreamToJSON;
    } });
    var sitemap_simple_1 = require_sitemap_simple();
    Object.defineProperty(exports2, "simpleSitemapAndIndex", { enumerable: true, get: function() {
      return sitemap_simple_1.simpleSitemapAndIndex;
    } });
  }
});

// netlify/functions/sitemap.js
var sitemap_exports = {};
__export(sitemap_exports, {
  handler: () => handler
});
module.exports = __toCommonJS(sitemap_exports);
var import_sitemap = __toESM(require_dist());
console.log("Sitemap function initialized");
var log = (...args) => {
  console.log("[Sitemap]", ...args);
};
var logError = (error, context = "") => {
  console.error(`[Sitemap Error] ${context}`, error);
};
var handler = async (event, context) => {
  log("Request received:", {
    path: event.path,
    httpMethod: event.httpMethod,
    query: event.queryStringParameters
  });
  try {
    const SITE_URL = "https://viswap.netlify.app";
    const pages = [
      {
        url: "/",
        changefreq: "daily",
        priority: 1,
        lastmod: (/* @__PURE__ */ new Date()).toISOString().split("T")[0]
      },
      {
        url: "/#about",
        changefreq: "weekly",
        priority: 0.8,
        lastmod: (/* @__PURE__ */ new Date()).toISOString().split("T")[0]
      },
      {
        url: "/#skills",
        changefreq: "weekly",
        priority: 0.7,
        lastmod: (/* @__PURE__ */ new Date()).toISOString().split("T")[0]
      },
      {
        url: "/#experience",
        changefreq: "weekly",
        priority: 0.7,
        lastmod: (/* @__PURE__ */ new Date()).toISOString().split("T")[0]
      },
      {
        url: "/#projects",
        changefreq: "weekly",
        priority: 0.8,
        lastmod: (/* @__PURE__ */ new Date()).toISOString().split("T")[0]
      },
      {
        url: "/#education",
        changefreq: "monthly",
        priority: 0.6,
        lastmod: (/* @__PURE__ */ new Date()).toISOString().split("T")[0]
      },
      {
        url: "/#contact",
        changefreq: "monthly",
        priority: 0.5,
        lastmod: (/* @__PURE__ */ new Date()).toISOString().split("T")[0]
      }
    ];
    const stream = new import_sitemap.SitemapStream({
      hostname: SITE_URL,
      lastmodDateOnly: true
    });
    const links = pages.map((page) => ({
      url: page.url,
      changefreq: page.changefreq,
      priority: page.priority,
      lastmod: page.lastmod
    }));
    let sitemapXml = "";
    for (const link of links) {
      stream.write(link);
    }
    stream.end();
    for await (const chunk of stream) {
      sitemapXml += chunk.toString("utf-8");
    }
    log("Sitemap generated successfully");
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/xml",
        "Cache-Control": "public, max-age=3600, s-maxage=3600",
        "X-Sitemap-Generated-At": (/* @__PURE__ */ new Date()).toISOString()
      },
      body: sitemapXml
    };
  } catch (error) {
    logError(error, "Failed to generate sitemap");
    return {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-cache, no-store, must-revalidate"
      },
      body: JSON.stringify({
        error: "Failed to generate sitemap",
        message: error.message,
        stack: process.env.NODE_ENV === "development" ? error.stack : void 0,
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
      }, null, 2)
    };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
/*! Bundled license information:

sitemap/dist/lib/errors.js:
sitemap/dist/lib/utils.js:
sitemap/dist/index.js:
  (*!
   * Sitemap
   * Copyright(c) 2011 Eugene Kalinin
   * MIT Licensed
   *)

sax/lib/sax.js:
  (*! http://mths.be/fromcodepoint v0.1.0 by @mathias *)
*/
//# sourceMappingURL=sitemap.js.map
