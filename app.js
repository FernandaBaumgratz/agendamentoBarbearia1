// Conectar ao Supabase
const supabaseUrl = 'https://YOUR_SUPABASE_URL';
const supabaseKey = 'YOUR_SUPABASE_API_KEY';
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

document.getElementById('agendamentoForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const data = document.getElementById('data').value;
  const hora = document.getElementById('hora').value;

  // Verifica se a data e hora foram preenchidas
  if (!data || !hora) {
    alert('Por favor, selecione uma data e uma hora');
    return;
  }

  // Salvar agendamento no banco de dados
  const { data: agendamento, error } = await supabase
    .from('agendamentos')
    .insert([
      { data: data, hora: hora, status: 'pendente' }
    ]);

  if (error) {
    document.getElementById('mensagem').innerText = 'Erro ao agendar: ' + error.message;
  } else {
    document.getElementById('mensagem').innerText = 'Agendamento realizado com sucesso!';
  }
});
