class FunkeWorksScraper < BaseScraper
  URL = 'https://www.funkeworks.de/jobs'.freeze

  def initialize
    super(URL)
  end

  def extract_data
    return {} unless @doc
    positions = @doc.css('a.block')
    positions.map do |position|
      next unless is_an_engineer_position?(position)
      {
        title: position.css('span.font-bold').text,
        link: "https://www.funkeworks.de/#{position['href']}",
        company: 'Funke Works'
      }
    end.compact
  end
end
