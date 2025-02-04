require 'nokogiri'
require 'open-uri'

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
    regex = /\b(?:rails|ruby|engineer|developer)\b/i
    position.text.match?(regex)
  end
end
