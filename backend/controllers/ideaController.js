import { idea, vote, comment } from '../models/database.js'; // Uniformità nel nome dei modelli

export class IdeaController {

    // Recupera tutte le idee associate all'utente corrente
    static async getIdeasForCurrentUser(req) {
        return idea.findAll({
            where: {
                UserUserName: req.username
            }
        });
    }

    // Recupera tutte le idee con il conteggio dei voti
    static async getAllIdeas() {
        return idea.scope('withVotesCount').findAll();
    }
    
    // Salva una nuova idea associata all'utente corrente
    static async saveIdea(req) {
        const newIdea = idea.build(req.body);
        newIdea.UserUserName = req.username; // Associa l'idea all'utente corrente
        return newIdea.save();
    }

    // Trova un'idea per il suo ID
    static async findIdeaById(req) {
        return idea.findByPk(req.params.id);
    }

    // Recupera tutti i dettagli di un'idea (inclusi voti e commenti)
    static async getDetailedIdea(req) {
        return idea.scope('full').findByPk(req.params.id);
    }

    // Aggiorna un'idea esistente con nuovi dati
    static async updateIdea(id, updatedData) {
        const existingIdea = await idea.findByPk(id);
        if (!existingIdea) {
            throw new Error(`Idea con ID ${id} non trovata.`);
        }
        existingIdea.set(updatedData); // Aggiorna i campi passati nella richiesta
        return existingIdea.save();
    }

    // Elimina un'idea esistente
    static async deleteIdea(req) {
        try {
            const ideaToDelete = await this.findIdeaById(req);
            if (!ideaToDelete) {
                throw new Error(`Idea con ID ${req.params.id} non trovata.`);
            }
            await ideaToDelete.destroy();
            return ideaToDelete;
        } catch (error) {
            throw new Error(`Errore durante l'eliminazione dell'idea: ${error.message}`);
        }
    }

    // Vota un'idea
    static async voteOnIdea(req) {
        const newVote = vote.build({
            UserUserName: req.username,
            value: req.body.value,
            IdeaId: req.params.id
        });
        return newVote.save();
    }

    // Salva un commento su un'idea
    static async saveCommentOnIdea(req) {
        const newComment = comment.build({
            UserUserName: req.username,
            IdeaId: req.params.id,
            ...req.body
        });
        return newComment.save();
    }
}