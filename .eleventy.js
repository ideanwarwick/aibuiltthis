module.exports = function(eleventyConfig) {
  // Copy CSS files to output
  eleventyConfig.addPassthroughCopy("src/css");
  
  // Copy favicon files to output
  eleventyConfig.addPassthroughCopy("src/*.png");
  eleventyConfig.addPassthroughCopy("src/*.webmanifest");

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes"
    },
    htmlTemplateEngine: "liquid"
  };
};