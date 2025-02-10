require 'nokogiri'
require 'open-uri'
require 'ferrum'

class BaseScraper
  def initialize(url)
    @url = url
    @doc = Nokogiri::HTML(URI.open(url))
  rescue StandardError => e
    Rails.logger.error("Error scraping #{url}: #{e.message}")
    @doc = nil
  end

  def extract_data
    raise NotImplementedError, "Subclasses must implement extract_data"
  end

  private

  def is_an_engineer_position?(position)
    regex = /\b(?:rails|ruby|engineer|developer|entwickler)\b/i
    position.text.match?(regex)
  end

  def javascript_scrapper(js_element)
    browser = Ferrum::Browser.new
    browser.goto(@url)
    browser.at_css(js_element) || browser.network.wait_for_idle
    html = browser.body
    @doc = Nokogiri::HTML(html)
    browser.quit
  end
end
