/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>



          <div>
            <h5>Sections</h5>
            <a href={this.docUrl('react/react-section', this.props.language)}>
              React Section
            </a>
            <a href={this.docUrl('js/js-section', this.props.language)}>
              JS Section
            </a>
            <a href={this.docUrl('css/css', this.props.language)}>
              CSS
            </a>
            <a href={this.docUrl('create-npm-module/create-npm-module-section', this.props.language)}>
              Create a NPM Module
            </a>
            <a href={this.docUrl('stories/stories', this.props.language)}>
              Tech stories
            </a>
          </div>


          <div>
            <h5>More</h5>
            <a href="https://github.com/ChickenKyiv/awesome-dev-stuff">GitHub Repository</a>
            <a
              className="github-button"
              href={this.props.config.repoUrl}
              data-icon="octicon-star"
              data-count-href="ChickenKyiv/awesome-dev-stuff/stargazers"
              data-show-count="true"
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub">
              Star
            </a>
          </div>

                    
        </section>

        <section className="copyright">
        Amazing artwork by ManyPixels team. &nbsp;
          <a href="https://gallery.manypixels.co/?ref=producthunt">
            From ManyPixels Illustrations Gallery
          </a>
        </section>

        <section className="copyright">{this.props.config.copyright}</section>

      </footer>
    );
  }
}

module.exports = Footer;
