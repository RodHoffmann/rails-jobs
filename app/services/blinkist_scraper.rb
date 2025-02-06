class BlinkistScraper < BaseScraper
  URL = 'https://job-boards.greenhouse.io/embed/job_board?for=go1blinkist'.freeze

  def initialize
    super(URL)
  end

  def extract_data
    return {} unless @doc
    positions = @doc.css('tr.job-post a')
    positions.map do |position|
      next unless is_an_engineer_position?(position.css('p')[0])
      {
        title: position.css('p')[0].text,
        link: position['href'],
        company: 'Blinkist'
      }
    end.compact
  end
end
